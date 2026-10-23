// VidyaSetu Content Editorial Workflow & Admin Management Service
// Enforces lifecycle: Draft -> Submitted -> Approved -> Published (or Rejected -> Draft)

import { lessonRepository } from '../repositories/lesson.repository.js';
import { authService } from './auth.service.js';

class AdminService {
  constructor() {
    this.auditLogs = this.loadAuditLogs();
    this.listeners = new Set();
  }

  loadAuditLogs() {
    try {
      const stored = localStorage.getItem('vidyasetu_audit_logs');
      if (stored) return JSON.parse(stored);
    } catch (e) {}

    return [
      {
        id: 'log-1',
        action: 'PLATFORM_INIT',
        actor: 'Smt. Rajeshwari Patil (Admin)',
        details: 'Initialized VidyaSetu standard rural curriculum v1.0',
        timestamp: new Date(Date.now() - 86400000 * 2).toISOString()
      },
      {
        id: 'log-2',
        action: 'CONTENT_SUBMITTED',
        actor: 'Master Suresh Kumar (Teacher)',
        details: 'Submitted lesson "Our Panchayati Raj" for district review',
        timestamp: new Date(Date.now() - 3600000 * 5).toISOString()
      }
    ];
  }

  recordAuditLog(action, details) {
    const actor = authService.getCurrentUser()?.name || 'Authorized Educator';
    const logItem = {
      id: 'log_' + Date.now(),
      action,
      actor,
      details,
      timestamp: new Date().toISOString()
    };
    this.auditLogs.unshift(logItem);
    localStorage.setItem('vidyasetu_audit_logs', JSON.stringify(this.auditLogs));
    this.notify();
    return logItem;
  }

  getAuditLogs() {
    return [...this.auditLogs];
  }

  async createLessonDraft({ title, grade_level, subject_id, summary, sections = [], quiz = [] }) {
    const user = authService.getCurrentUser();
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    const newLesson = {
      id: 'lesson_' + Date.now(),
      title,
      slug,
      grade_level: Number(grade_level),
      subject_id,
      summary,
      estimated_minutes: 15,
      difficulty_level: 'beginner',
      status: 'draft',
      created_by: user?.name || 'Educator',
      created_at: new Date().toISOString(),
      sections,
      quiz,
      translations: {}
    };

    lessonRepository.saveCustomLesson(newLesson);
    this.recordAuditLog('LESSON_CREATED_DRAFT', `Created draft lesson: "${title}" for Class ${grade_level}`);
    return newLesson;
  }

  async submitForReview(lessonId) {
    const lesson = await lessonRepository.getLessonById(lessonId);
    if (!lesson) throw new Error('Lesson not found');

    if (lesson.status !== 'draft' && lesson.status !== 'rejected') {
      throw new Error(`Cannot submit lesson in status "${lesson.status}"`);
    }

    lesson.status = 'submitted';
    lesson.submitted_at = new Date().toISOString();
    lessonRepository.saveCustomLesson(lesson);
    this.recordAuditLog('LESSON_SUBMITTED_REVIEW', `Submitted lesson "${lesson.title}" for approval`);
    return lesson;
  }

  async approveLesson(lessonId, feedbackNotes = '') {
    if (!authService.isAdmin() && authService.getRole() !== 'content_editor') {
      throw new Error('Permission denied: Only Administrators and Content Editors can approve lessons.');
    }

    const lesson = await lessonRepository.getLessonById(lessonId);
    if (!lesson) throw new Error('Lesson not found');

    lesson.status = 'approved';
    lesson.approved_at = new Date().toISOString();
    lesson.reviewer_feedback = feedbackNotes;
    lessonRepository.saveCustomLesson(lesson);
    this.recordAuditLog('LESSON_APPROVED', `Approved lesson "${lesson.title}". Notes: ${feedbackNotes || 'None'}`);
    return lesson;
  }

  async rejectLesson(lessonId, feedbackNotes) {
    if (!authService.isAdmin() && authService.getRole() !== 'content_editor') {
      throw new Error('Permission denied: Only Administrators and Content Editors can reject lessons.');
    }

    const lesson = await lessonRepository.getLessonById(lessonId);
    if (!lesson) throw new Error('Lesson not found');

    lesson.status = 'rejected';
    lesson.reviewer_feedback = feedbackNotes || 'Revisions required before approval.';
    lessonRepository.saveCustomLesson(lesson);
    this.recordAuditLog('LESSON_REJECTED', `Returned lesson "${lesson.title}" to draft. Reason: ${lesson.reviewer_feedback}`);
    return lesson;
  }

  async publishLesson(lessonId) {
    if (!authService.isAdmin()) {
      throw new Error('Permission denied: Only Administrators can publish lessons to students.');
    }

    const lesson = await lessonRepository.getLessonById(lessonId);
    if (!lesson) throw new Error('Lesson not found');

    if (lesson.status !== 'approved') {
      throw new Error('Lesson must be reviewed and approved before publishing');
    }

    lesson.status = 'published';
    lesson.published_at = new Date().toISOString();
    lessonRepository.saveCustomLesson(lesson);
    this.recordAuditLog('LESSON_PUBLISHED', `Published lesson "${lesson.title}" live to students`);
    return lesson;
  }

  async unpublishLesson(lessonId) {
    if (!authService.isAdmin()) {
      throw new Error('Permission denied: Only Administrators can unpublish lessons.');
    }

    const lesson = await lessonRepository.getLessonById(lessonId);
    if (!lesson) throw new Error('Lesson not found');

    lesson.status = 'draft';
    lessonRepository.saveCustomLesson(lesson);
    this.recordAuditLog('LESSON_UNPUBLISHED', `Unpublished lesson "${lesson.title}" back to draft`);
    return lesson;
  }

  subscribe(callback) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  notify() {
    for (const listener of this.listeners) {
      try {
        listener();
      } catch (e) {}
    }
  }
}

export const adminService = new AdminService();
