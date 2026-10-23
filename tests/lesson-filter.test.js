import { describe, it, expect } from 'vitest';
import { sampleLessons } from '../src/js/data/sample-lessons.js';

describe('Lesson Filtering and Retrieval', () => {
  it('should filter lessons accurately by grade level (Classes 1–8)', () => {
    const class4Lessons = sampleLessons.filter(l => l.grade_level === 4);
    expect(class4Lessons.length).toBeGreaterThan(0);
    class4Lessons.forEach(l => {
      expect(l.grade_level).toBe(4);
    });

    const class5Lessons = sampleLessons.filter(l => l.grade_level === 5);
    class5Lessons.forEach(l => {
      expect(l.grade_level).toBe(5);
    });
  });

  it('should filter lessons accurately by subject code', () => {
    const mathLessons = sampleLessons.filter(l => l.subject_id === 'math');
    expect(mathLessons.length).toBeGreaterThan(0);
    mathLessons.forEach(l => {
      expect(l.subject_name).toBe('Mathematics');
    });

    const evsLessons = sampleLessons.filter(l => l.subject_id === 'evs');
    expect(evsLessons.length).toBeGreaterThan(0);
  });

  it('should filter lessons by search keyword in title or summary', () => {
    const query = 'water';
    const matched = sampleLessons.filter(l =>
      l.title.toLowerCase().includes(query) ||
      l.summary.toLowerCase().includes(query)
    );
    expect(matched.length).toBeGreaterThan(0);
    expect(matched[0].slug).toContain('water');
  });

  it('should support published vs submitted status isolation', () => {
    const published = sampleLessons.filter(l => l.status === 'published');
    const submitted = sampleLessons.filter(l => l.status === 'submitted');

    expect(published.length).toBeGreaterThan(0);
    expect(submitted.length).toBeGreaterThan(0);
    expect(submitted[0].slug).toBe('village-panchayat-governance');
  });
});
