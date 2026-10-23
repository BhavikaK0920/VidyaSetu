import { describe, it, expect, beforeEach } from 'vitest';
import { sampleLessons } from '../src/js/data/sample-lessons.js';

describe('Quiz Scoring and Duplicate Prevention Logic', () => {
  const lesson = sampleLessons[0]; // Fractions lesson

  it('should score 100% when all correct options are selected', () => {
    const answers = [
      { questionId: 'q1', selectedOptionId: 'opt2' }, // correct
      { questionId: 'q2', selectedOptionId: 'opt5' }, // correct
      { questionId: 'q3', selectedOptionId: 'opt10' } // correct
    ];

    let correctCount = 0;
    lesson.quiz.forEach(q => {
      const ans = answers.find(a => a.questionId === q.id);
      const opt = q.options.find(o => o.id === ans?.selectedOptionId);
      if (opt?.is_correct) correctCount++;
    });

    const scorePercentage = Math.round((correctCount / lesson.quiz.length) * 100);
    expect(scorePercentage).toBe(100);
    expect(correctCount).toBe(3);
  });

  it('should award 3 stars for 80%+, 2 stars for 50%+, and 1 star otherwise', () => {
    function calculateStars(percent) {
      return percent >= 80 ? 3 : percent >= 50 ? 2 : 1;
    }

    expect(calculateStars(100)).toBe(3);
    expect(calculateStars(85)).toBe(3);
    expect(calculateStars(66)).toBe(2);
    expect(calculateStars(50)).toBe(2);
    expect(calculateStars(33)).toBe(1);
    expect(calculateStars(0)).toBe(1);
  });

  it('should prevent repeated submissions from inflating total stars', () => {
    const completedLessonIds = new Set();
    let totalStudentStars = 0;

    function handleSubmission(lessonId, starsEarned) {
      const isFirst = !completedLessonIds.has(lessonId);
      const netAdded = isFirst ? starsEarned : 0;
      if (isFirst) {
        completedLessonIds.add(lessonId);
        totalStudentStars += netAdded;
      }
      return { netAdded, totalStudentStars };
    }

    // First attempt: earned 3 stars
    const res1 = handleSubmission(lesson.id, 3);
    expect(res1.netAdded).toBe(3);
    expect(res1.totalStudentStars).toBe(3);

    // Second attempt on same lesson: earned 3 stars again
    const res2 = handleSubmission(lesson.id, 3);
    expect(res2.netAdded).toBe(0); // Deduplicated!
    expect(res2.totalStudentStars).toBe(3); // Unchanged!
  });
});
