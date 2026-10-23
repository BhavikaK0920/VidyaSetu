// VidyaSetu Internationalization Service
import { translations, languages } from './translations.js';

class I18nService {
  constructor() {
    this.currentLang = localStorage.getItem('vidyasetu_lang') || 'en';
    if (!translations[this.currentLang]) {
      this.currentLang = 'en';
    }
    this.listeners = new Set();
    document.documentElement.lang = this.currentLang;
  }

  getAvailableLanguages() {
    return languages;
  }

  getCurrentLanguage() {
    return this.currentLang;
  }

  setLanguage(langCode) {
    if (translations[langCode]) {
      this.currentLang = langCode;
      localStorage.setItem('vidyasetu_lang', langCode);
      document.documentElement.lang = langCode;
      this.notifyListeners();
    }
  }

  t(key, fallback = '') {
    const dict = translations[this.currentLang] || translations.en;
    if (dict && dict[key] !== undefined) {
      return dict[key];
    }
    // Fallback to English dictionary
    if (translations.en && translations.en[key] !== undefined) {
      return translations.en[key];
    }
    return fallback || key;
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notifyListeners() {
    for (const listener of this.listeners) {
      try {
        listener(this.currentLang);
      } catch (err) {
        console.error('Error in i18n listener:', err);
      }
    }
  }
}

export const i18n = new I18nService();
