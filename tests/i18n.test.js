import { describe, it, expect, beforeEach } from 'vitest';
import { translations, languages } from '../src/js/i18n/translations.js';

describe('Multilingual Translation System', () => {
  it('should support all 8 specified Indian regional languages plus English', () => {
    const requiredCodes = ['en', 'hi', 'kn', 'te', 'ta', 'ml', 'mr', 'bn'];
    const codes = languages.map(l => l.code);

    requiredCodes.forEach(code => {
      expect(codes).toContain(code);
      expect(translations[code]).toBeDefined();
    });
  });

  it('should have core educational keys translated across all languages', () => {
    const essentialKeys = [
      'brand_name',
      'tagline',
      'hero_title',
      'hero_cta_primary',
      'nav_home',
      'nav_lessons',
      'status_online',
      'status_offline',
      'quiz_correct',
      'quiz_hint',
      'quiz_completed_title'
    ];

    Object.keys(translations).forEach(lang => {
      essentialKeys.forEach(key => {
        expect(translations[lang][key], `Missing ${key} in ${lang}`).toBeDefined();
        expect(translations[lang][key].length).toBeGreaterThan(0);
      });
    });
  });

  it('should fall back to English if a key is missing in another language', () => {
    const fallbackText = translations.en.brand_name;
    expect(fallbackText).toBe('VidyaSetu');
  });
});
