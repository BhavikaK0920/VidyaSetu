// VidyaSetu IndexedDB Storage Architecture
// Manages downloaded lessons, local quiz attempts, progress, and sync queue

const DB_NAME = 'VidyaSetuOfflineDB';
const DB_VERSION = 1;

export class OfflineDB {
  constructor() {
    this.db = null;
    this.initPromise = this.init();
  }

  async init() {
    if (this.db) return this.db;

    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onupgradeneeded = (event) => {
        const db = event.target.result;

        // 1. Downloaded Lessons Store
        if (!db.objectStoreNames.contains('lessons')) {
          const lessonStore = db.createObjectStore('lessons', { keyPath: 'id' });
          lessonStore.createIndex('grade_level', 'grade_level', { unique: false });
          lessonStore.createIndex('subject_id', 'subject_id', { unique: false });
        }

        // 2. Quiz Attempts Store
        if (!db.objectStoreNames.contains('quiz_attempts')) {
          const attemptStore = db.createObjectStore('quiz_attempts', { keyPath: 'id' });
          attemptStore.createIndex('lesson_id', 'lesson_id', { unique: false });
        }

        // 3. Lesson Progress Store
        if (!db.objectStoreNames.contains('lesson_progress')) {
          db.createObjectStore('lesson_progress', { keyPath: 'lesson_id' });
        }

        // 4. Pending Synchronization Queue
        if (!db.objectStoreNames.contains('sync_queue')) {
          const syncStore = db.createObjectStore('sync_queue', { keyPath: 'id' });
          syncStore.createIndex('status', 'status', { unique: false });
          syncStore.createIndex('created_at', 'created_at', { unique: false });
        }

        // 5. Bookmarks Store
        if (!db.objectStoreNames.contains('bookmarks')) {
          db.createObjectStore('bookmarks', { keyPath: 'lesson_id' });
        }

        // 6. User Profile Cache
        if (!db.objectStoreNames.contains('user_profile')) {
          db.createObjectStore('user_profile', { keyPath: 'key' });
        }
      };

      request.onsuccess = (event) => {
        this.db = event.target.result;
        resolve(this.db);
      };

      request.onerror = (event) => {
        console.error('[IndexedDB] Failed to open offline database:', event.target.error);
        reject(event.target.error);
      };
    });
  }

  async getStore(storeName, mode = 'readonly') {
    const db = await this.initPromise;
    const tx = db.transaction(storeName, mode);
    return tx.objectStore(storeName);
  }

  // --- Lessons Storage ---
  async saveLesson(lesson) {
    const store = await this.getStore('lessons', 'readwrite');
    return new Promise((resolve, reject) => {
      const item = { ...lesson, downloaded_at: new Date().toISOString() };
      const req = store.put(item);
      req.onsuccess = () => resolve(item);
      req.onerror = () => reject(req.error);
    });
  }

  async getLesson(id) {
    const store = await this.getStore('lessons', 'readonly');
    return new Promise((resolve, reject) => {
      const req = store.get(id);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => reject(req.error);
    });
  }

  async getAllDownloadedLessons() {
    const store = await this.getStore('lessons', 'readonly');
    return new Promise((resolve, reject) => {
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => reject(req.error);
    });
  }

  async removeLesson(id) {
    const store = await this.getStore('lessons', 'readwrite');
    return new Promise((resolve, reject) => {
      const req = store.delete(id);
      req.onsuccess = () => resolve(true);
      req.onerror = () => reject(req.error);
    });
  }

  // --- Progress Storage ---
  async saveProgress(progress) {
    const store = await this.getStore('lesson_progress', 'readwrite');
    return new Promise((resolve, reject) => {
      const req = store.put(progress);
      req.onsuccess = () => resolve(progress);
      req.onerror = () => reject(req.error);
    });
  }

  async getProgress(lessonId) {
    const store = await this.getStore('lesson_progress', 'readonly');
    return new Promise((resolve, reject) => {
      const req = store.get(lessonId);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => reject(req.error);
    });
  }

  async getAllProgress() {
    const store = await this.getStore('lesson_progress', 'readonly');
    return new Promise((resolve, reject) => {
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => reject(req.error);
    });
  }

  // --- Sync Queue Operations ---
  async enqueueSyncEvent(eventType, payload) {
    const store = await this.getStore('sync_queue', 'readwrite');
    const event = {
      id: 'sync_' + Date.now() + '_' + Math.random().toString(36).substring(2, 8),
      event_type: eventType,
      payload,
      status: 'pending',
      retry_count: 0,
      created_at: new Date().toISOString()
    };
    return new Promise((resolve, reject) => {
      const req = store.put(event);
      req.onsuccess = () => resolve(event);
      req.onerror = () => reject(req.error);
    });
  }

  async getPendingSyncEvents() {
    const store = await this.getStore('sync_queue', 'readonly');
    return new Promise((resolve, reject) => {
      const req = store.getAll();
      req.onsuccess = () => {
        const events = req.result || [];
        resolve(events.filter(e => e.status === 'pending' || e.status === 'failed'));
      };
      req.onerror = () => reject(req.error);
    });
  }

  async updateSyncEventStatus(id, status, errorMsg = null) {
    const store = await this.getStore('sync_queue', 'readwrite');
    return new Promise((resolve, reject) => {
      const req = store.get(id);
      req.onsuccess = () => {
        const item = req.result;
        if (!item) return resolve(null);
        item.status = status;
        if (errorMsg) item.error_message = errorMsg;
        if (status === 'synced') item.synced_at = new Date().toISOString();
        if (status === 'failed') item.retry_count = (item.retry_count || 0) + 1;
        const putReq = store.put(item);
        putReq.onsuccess = () => resolve(item);
        putReq.onerror = () => reject(putReq.error);
      };
      req.onerror = () => reject(req.error);
    });
  }

  async removeCompletedSyncEvents() {
    const store = await this.getStore('sync_queue', 'readwrite');
    return new Promise((resolve, reject) => {
      const req = store.getAll();
      req.onsuccess = () => {
        const items = req.result || [];
        const synced = items.filter(e => e.status === 'synced');
        synced.forEach(e => store.delete(e.id));
        resolve(synced.length);
      };
      req.onerror = () => reject(req.error);
    });
  }
}

export const offlineDB = new OfflineDB();
