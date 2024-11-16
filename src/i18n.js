// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import backend from 'i18next-http-backend';

// Initialize i18next
i18n
  .use(LanguageDetector) // Automatically detect language
  .use(initReactI18next) // Pass i18n instance to React
  .use(backend) // Optional: load translation files from the backend (e.g., JSON)
  .init({
    fallbackLng: 'en', // Default language if the user's language is not available
    debug: true, // Enable debugging
    interpolation: {
      escapeValue: false, // React already escapes output by default
    },
    resources: {
      en: {
        translation: {
          welcome: 'Welcome',
          greeting: 'Hello, how are you?',
        },
      },
      ar: {
        translation: {
          welcome: 'أهلاً وسهلاً',
          greeting: 'مرحبًا، كيف حالك؟',
        },
      },
    },
  });

export default i18n;
