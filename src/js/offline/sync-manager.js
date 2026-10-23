// VidyaSetu Sync Manager
// Coordinates online/offline state detection, pending operation queue, and retry logic

import { offlineDB } from './database.js';

class SyncManager {
  constructor() {
    this.isOnline = typeof navigator !== 'undefined' ? navigator.onLine : true;
    this.isSyncing = false;
    this.lastSyncTime = localStorage.getItem('vidyasetu_last_sync') || null;
    this.statusListeners = new Set();

    if (typeof window !== 'undefined') {
      window.addEventListener('online', () => this.handleNetworkChange(true));
      window.addEventListener('offline', () => this.handleNetworkChange(false));
    }
  }

  handleNetworkChange(onlineStatus) {
    this.isOnline = onlineStatus;
    this.notifyStatus();
    if (this.isOnline) {
      this.syncPendingEvents();
    }
  }

  getStatus() {
    if (this.isSyncing) return 'syncing';
    return this.isOnline ? 'online' : 'offline';
  }

  onStatusChange(callback) {
    this.statusListeners.add(callback);
    return () => this.statusListeners.delete(callback);
  }

  notifyStatus() {
    const status = this.getStatus();
    for (const listener of this.statusListeners) {
      try {
        listener(status, {
          isOnline: this.isOnline,
          isSyncing: this.isSyncing,
          lastSyncTime: this.lastSyncTime
        });
      } catch (err) {
        console.error('Error in sync status listener:', err);
      }
    }
  }

  async recordEvent(eventType, payload) {
    const event = await offlineDB.enqueueSyncEvent(eventType, payload);
    if (this.isOnline) {
      this.syncPendingEvents();
    }
    return event;
  }

  async syncPendingEvents() {
    if (this.isSyncing) return;
    this.isSyncing = true;
    this.notifyStatus();

    try {
      const pending = await offlineDB.getPendingSyncEvents();
      if (pending.length === 0) {
        this.isSyncing = false;
        this.notifyStatus();
        return { syncedCount: 0, failedCount: 0 };
      }

      console.log(`[SyncManager] Processing ${pending.length} pending events...`);
      let syncedCount = 0;
      let failedCount = 0;

      for (const item of pending) {
        try {
          // If offline during processing, abort remaining
          if (!this.isOnline) {
            failedCount++;
            continue;
          }

          // Process based on type
          await this.processItem(item);
          await offlineDB.updateSyncEventStatus(item.id, 'synced');
          syncedCount++;
        } catch (err) {
          console.error(`[SyncManager] Failed to sync item ${item.id}:`, err);
          await offlineDB.updateSyncEventStatus(item.id, 'failed', err.message);
          failedCount++;
        }
      }

      this.lastSyncTime = new Date().toISOString();
      localStorage.setItem('vidyasetu_last_sync', this.lastSyncTime);
      await offlineDB.removeCompletedSyncEvents();

      return { syncedCount, failedCount };
    } catch (err) {
      console.error('[SyncManager] Batch sync error:', err);
      throw err;
    } finally {
      this.isSyncing = false;
      this.notifyStatus();
    }
  }

  async processItem(item) {
    // In production with Supabase, calls the Supabase API or Edge Function
    // Simulates or completes sync network transaction with 400ms server roundtrip
    await new Promise(resolve => setTimeout(resolve, 400));
    return true;
  }
}

export const syncManager = new SyncManager();
