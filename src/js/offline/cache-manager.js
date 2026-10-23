// VidyaSetu Cache Manager
// Manages downloadable offline lesson packs and local assets

import { offlineDB } from './database.js';

class CacheManager {
  async downloadLesson(lesson) {
    if (!lesson || !lesson.id) {
      throw new Error('Invalid lesson data for download');
    }

    const packagedLesson = {
      ...lesson,
      downloaded_at: new Date().toISOString(),
      is_offline_available: true
    };

    await offlineDB.saveLesson(packagedLesson);
    return packagedLesson;
  }

  async isLessonDownloaded(lessonId) {
    const lesson = await offlineDB.getLesson(lessonId);
    return !!lesson;
  }

  async removeLesson(lessonId) {
    await offlineDB.removeLesson(lessonId);
    return true;
  }

  async getDownloadedLessons() {
    return await offlineDB.getAllDownloadedLessons();
  }

  async getDownloadedLesson(lessonId) {
    return await offlineDB.getLesson(lessonId);
  }
}

export const cacheManager = new CacheManager();
