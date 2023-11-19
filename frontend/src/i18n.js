// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // Your i18next configuration goes here
    resources: {
      // ...
    },
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
