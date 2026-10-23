// VidyaSetu Lesson Repository
// Encapsulates remote data fetching, offline IndexedDB fallback, and multilingual filtering

import { sampleLessons } from '../data/sample-lessons.js';
import { cacheManager } from '../offline/cache-manager.js';
import { supabase, isSupabaseConfigured } from '../config/supabase.js';

class LessonRepository {
  constructor() {
    this.memoryLessons = [...sampleLessons];
    this.loadCustomLessons();
  }

  loadCustomLessons() {
    try {
      const saved = localStorage.getItem('vidyasetu_custom_lessons');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          this.memoryLessons = [...sampleLessons, ...parsed];
        }
      }
    } catch (e) {
      console.warn('Failed to load custom lessons from local storage:', e);
    }
  }

  saveCustomLesson(lesson) {
    const existingIndex = this.memoryLessons.findIndex(l => l.id === lesson.id);
    if (existingIndex >= 0) {
      this.memoryLessons[existingIndex] = lesson;
    } else {
      this.memoryLessons.push(lesson);
    }
    const customOnes = this.memoryLessons.filter(l => !sampleLessons.some(s => s.id === l.id));
    localStorage.setItem('vidyasetu_custom_lessons', JSON.stringify(customOnes));
    return lesson;
  }

  async getAllLessons(options = {}) {
    let lessons = [...this.memoryLessons];

    // If Supabase is configured and online, we can query published lessons
    if (isSupabaseConfigured && navigator.onLine && supabase) {
      try {
        const { data, error } = await supabase
          .from('lessons')
          .select('*, lesson_translations(*)')
          .order('grade_level', { ascending: true });

        if (!error && data && data.length > 0) {
          lessons = data;
        }
      } catch (err) {
        console.warn('Supabase lessons fetch failed, falling back to local dataset:', err);
      }
    }

    // Decorate lessons with offline availability status from IndexedDB
    const downloadedList = await cacheManager.getDownloadedLessons();
    const downloadedIds = new Set(downloadedList.map(d => d.id));

    return lessons.map(lesson => ({
      ...lesson,
      is_downloaded: downloadedIds.has(lesson.id)
    }));
  }

  async getLessonById(id) {
    // 1. Check offline downloaded cache first
    const offlineCopy = await cacheManager.getDownloadedLesson(id);
    if (offlineCopy) {
      return { ...offlineCopy, is_downloaded: true };
    }

    // 2. Check memory/sample dataset
    const found = this.memoryLessons.find(l => l.id === id);
    if (found) {
      return { ...found, is_downloaded: false };
    }

    // 3. Check Supabase if configured
    if (isSupabaseConfigured && navigator.onLine && supabase) {
      try {
        const { data, error } = await supabase
          .from('lessons')
          .select('*, lesson_sections(*), questions(*, question_options(*))')
          .eq('id', id)
          .single();

        if (!error && data) {
          return { ...data, is_downloaded: false };
        }
      } catch (e) {
        // Fallback
      }
    }

    return null;
  }

  async filterLessons({
    gradeLevel = null,
    subjectId = null,
    searchQuery = '',
    difficulty = null,
    status = 'published',
    onlyOffline = false
  } = {}) {
    const all = await this.getAllLessons();

    return all.filter(lesson => {
      // Status filter (students only see published; admin/reviewers can see draft/submitted)
      if (status && status !== 'all' && lesson.status !== status) {
        return false;
      }

      // Grade level filter
      if (gradeLevel && lesson.grade_level !== Number(gradeLevel)) {
        return false;
      }

      // Subject filter
      if (subjectId && subjectId !== 'all' && lesson.subject_id !== subjectId) {
        return false;
      }

      // Difficulty level filter
      if (difficulty && difficulty !== 'all' && lesson.difficulty_level !== difficulty) {
        return false;
      }

      // Offline-only filter
      if (onlyOffline && !lesson.is_downloaded) {
        return false;
      }

      // Search query filter (matches title, summary, or slug)
      if (searchQuery && searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase().trim();
        const titleMatch = lesson.title.toLowerCase().includes(q);
        const summaryMatch = lesson.summary && lesson.summary.toLowerCase().includes(q);
        const transMatch = lesson.translations && Object.values(lesson.translations).some(
          t => (t.title && t.title.toLowerCase().includes(q)) || (t.summary && t.summary.toLowerCase().includes(q))
        );
        if (!titleMatch && !summaryMatch && !transMatch) {
          return false;
        }
      }

      return true;
    });
  }
}

export const lessonRepository = new LessonRepository();
