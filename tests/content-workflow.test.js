import { describe, it, expect } from 'vitest';

describe('Supervised Content Editorial Workflow', () => {
  function transitionLesson(lesson, action, actorRole, feedback = '') {
    if (action === 'submit') {
      if (lesson.status !== 'draft' && lesson.status !== 'rejected') {
        throw new Error('Only drafts or rejected lessons can be submitted');
      }
      return { ...lesson, status: 'submitted' };
    }

    if (action === 'approve') {
      if (actorRole !== 'admin' && actorRole !== 'content_editor') {
        throw new Error('Unauthorized: Only Admin or Content Editor can approve');
      }
      if (lesson.status !== 'submitted') {
        throw new Error('Only submitted lessons can be approved');
      }
      return { ...lesson, status: 'approved', reviewer_feedback: feedback };
    }

    if (action === 'reject') {
      if (actorRole !== 'admin' && actorRole !== 'content_editor') {
        throw new Error('Unauthorized: Only Admin or Content Editor can reject');
      }
      if (lesson.status !== 'submitted') {
        throw new Error('Only submitted lessons can be rejected');
      }
      return { ...lesson, status: 'rejected', reviewer_feedback: feedback };
    }

    if (action === 'publish') {
      if (actorRole !== 'admin') {
        throw new Error('Unauthorized: Only Admin can publish');
      }
      if (lesson.status !== 'approved') {
        throw new Error('Lesson must be approved before publishing');
      }
      return { ...lesson, status: 'published' };
    }

    throw new Error('Unknown action');
  }

  it('should successfully progress through Draft -> Submitted -> Approved -> Published', () => {
    let lesson = { id: 'l1', title: 'Solar Energy', status: 'draft' };

    // 1. Teacher submits draft
    lesson = transitionLesson(lesson, 'submit', 'teacher');
    expect(lesson.status).toBe('submitted');

    // 2. Editor approves
    lesson = transitionLesson(lesson, 'approve', 'content_editor', 'Verified against Class 5 syllabus');
    expect(lesson.status).toBe('approved');
    expect(lesson.reviewer_feedback).toBe('Verified against Class 5 syllabus');

    // 3. Admin publishes
    lesson = transitionLesson(lesson, 'publish', 'admin');
    expect(lesson.status).toBe('published');
  });

  it('should reject unreviewed draft when attempting direct publish', () => {
    const draftLesson = { id: 'l2', title: 'Unreviewed Math', status: 'draft' };

    expect(() => {
      transitionLesson(draftLesson, 'publish', 'admin');
    }).toThrow('Lesson must be approved before publishing');
  });

  it('should return submitted lesson to rejected with reviewer feedback', () => {
    let lesson = { id: 'l3', title: 'Folk Tales', status: 'submitted' };

    lesson = transitionLesson(lesson, 'reject', 'content_editor', 'Please include vocabulary pronunciation audio.');
    expect(lesson.status).toBe('rejected');
    expect(lesson.reviewer_feedback).toContain('vocabulary');

    // Can be resubmitted after editing
    lesson = transitionLesson(lesson, 'submit', 'teacher');
    expect(lesson.status).toBe('submitted');
  });

  it('should prevent student from approving or publishing lessons', () => {
    const lesson = { id: 'l4', title: 'Gravity', status: 'submitted' };

    expect(() => {
      transitionLesson(lesson, 'approve', 'student');
    }).toThrow('Unauthorized');

    expect(() => {
      transitionLesson(lesson, 'publish', 'student');
    }).toThrow('Unauthorized');
  });
});
