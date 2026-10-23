import { describe, it, expect } from 'vitest';
import { sampleLessons } from '../src/js/data/sample-lessons.js';
import { getLocalizedLesson } from '../src/js/utils/localization.js';

describe('Deep Lesson Multilingual Localization', () => {
  const lesson = sampleLessons.find(l => l.id === 'lesson-math-101') || sampleLessons[0];

  it('should return base English lesson when language is en', () => {
    const localized = getLocalizedLesson(lesson, 'en');
    expect(localized.title).toBe('Understanding Fractions with Chapati & Mangoes');
    expect(localized.sections[0].title).toBe('The Great Chapati Share');
    expect(localized.quiz[0].prompt).toContain('watermelon');
  });

  it('should deeply translate lesson into Kannada (kn)', () => {
    const knLesson = getLocalizedLesson(lesson, 'kn');
    expect(knLesson.title).toContain('ಭಿನ್ನರಾಶಿಗಳ');
    expect(knLesson.sections[0].title).toContain('ಚಪಾತಿ');
    expect(knLesson.sections[0].read_aloud).toContain('ಭಾಗಿಸು');
    expect(knLesson.interactive_activity.title).toContain('ಹೊಂದಿಸಿ');
    expect(knLesson.quiz[0].prompt).toContain('ಕಲ್ಲಂಗಡಿ');
    expect(knLesson.quiz[0].options[1].text).toContain('ಕಾಲು');
    expect(knLesson.quiz[0].hint).toContain('ನೆನಪಿಡಿ');
  });

  it('should deeply translate lesson into Hindi (hi)', () => {
    const hiLesson = getLocalizedLesson(lesson, 'hi');
    expect(hiLesson.title).toContain('भिन्न');
    expect(hiLesson.sections[0].title).toContain('रोटी');
    expect(hiLesson.sections[0].read_aloud).toContain('बटा');
    expect(hiLesson.interactive_activity.title).toContain('मिलाएँ');
    expect(hiLesson.quiz[0].prompt).toContain('तरबूज');
    expect(hiLesson.quiz[0].options[1].text).toContain('चौथाई');
    expect(hiLesson.quiz[0].hint).toContain('याद रखें');
  });

  it('should deeply translate lesson into Telugu (te)', () => {
    const teLesson = getLocalizedLesson(lesson, 'te');
    expect(teLesson.title).toContain('భిన్నాలు');
    expect(teLesson.sections[0].title).toContain('చపాతీ');
    expect(teLesson.interactive_activity.title).toContain('జతపరచండి');
    expect(teLesson.quiz[0].prompt).toContain('పుచ్చకాయను');
  });

  it('should deeply translate lesson into Tamil (ta)', () => {
    const taLesson = getLocalizedLesson(lesson, 'ta');
    expect(taLesson.title).toContain('பின்னங்கள்');
    expect(taLesson.sections[0].title).toContain('சப்பாத்தி');
    expect(taLesson.quiz[0].prompt).toContain('தர்பூசணியை');
  });

  it('should gracefully fallback to base English if translation is missing for an unfamiliar code', () => {
    const fallbackLesson = getLocalizedLesson(lesson, 'xx');
    expect(fallbackLesson.title).toBe(lesson.title);
    expect(fallbackLesson.sections[0].title).toBe(lesson.sections[0].title);
  });
});
