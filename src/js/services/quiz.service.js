// VidyaSetu Quiz & Evaluation Service
// Evaluates answers, provides encouraging explanations, and prevents reward duplication

import { syncManager } from '../offline/sync-manager.js';
import { offlineDB } from '../offline/database.js';
import { authService } from './auth.service.js';

class QuizService {
  constructor() {
    this.completedLessonIds = new Set(this.loadCompletedIds());
  }

  loadCompletedIds() {
    try {
      const stored = localStorage.getItem('vidyasetu_completed_quizzes');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  }

  hasCompletedLesson(lessonId) {
    return this.completedLessonIds.has(lessonId);
  }

  evaluateSubmission({ lesson, answers, studentId = null }) {
    if (!lesson || !Array.isArray(lesson.quiz)) {
      throw new Error('Lesson questions unavailable for evaluation');
    }

    const questions = lesson.quiz;
    let correctCount = 0;
    const feedbackList = [];
    const conceptsMastered = [];
    const conceptsToRevise = [];

    questions.forEach((q) => {
      const submitted = answers.find(a => a.questionId === q.id);
      const selectedOption = q.options.find(opt => opt.id === submitted?.selectedOptionId);
      const isCorrect = selectedOption?.is_correct || false;

      if (isCorrect) {
        correctCount++;
        conceptsMastered.push(q.prompt);
      } else {
        conceptsToRevise.push(q.prompt);
      }

      feedbackList.push({
        questionId: q.id,
        prompt: q.prompt,
        selectedOptionId: submitted?.selectedOptionId,
        isCorrect,
        explanation: q.explanation || 'Good attempt!',
        hint: q.hint || 'Review the lesson steps to refresh your understanding.'
      });
    });

    const totalQuestions = questions.length;
    const scorePercentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

    // Stars logic: 80%+ gives 3 stars, 50%+ gives 2 stars, otherwise 1 star
    const starsEarned = scorePercentage >= 80 ? 3 : scorePercentage >= 50 ? 2 : 1;

    // Duplicate check: if user already completed this lesson, do not inflate net stars count
    const isFirstCompletion = !this.hasCompletedLesson(lesson.id);
    const netStarsAwarded = isFirstCompletion ? starsEarned : 0;

    if (isFirstCompletion && scorePercentage >= 50) {
      this.completedLessonIds.add(lesson.id);
      localStorage.setItem('vidyasetu_completed_quizzes', JSON.stringify([...this.completedLessonIds]));
      authService.addStars(netStarsAwarded);
    }

    const attemptResult = {
      attemptId: 'att_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
      lessonId: lesson.id,
      studentId: studentId || authService.getCurrentUser()?.id,
      scorePercentage,
      totalQuestions,
      correctCount,
      starsEarned,
      netStarsAwarded,
      isFirstCompletion,
      feedbackList,
      conceptsMastered,
      conceptsToRevise,
      completedAt: new Date().toISOString()
    };

    // Save locally to IndexedDB & enqueue to sync manager
    offlineDB.saveProgress({
      lesson_id: lesson.id,
      is_completed: scorePercentage >= 50,
      progress_percent: 100,
      last_score: scorePercentage,
      updated_at: new Date().toISOString()
    }).catch(err => console.warn('IndexedDB progress save:', err));

    syncManager.recordEvent('quiz_submission', attemptResult)
      .catch(err => console.warn('Sync enqueue failed:', err));

    return attemptResult;
  }
}

export const quizService = new QuizService();
