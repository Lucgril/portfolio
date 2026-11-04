import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import itTranslation from './it.json';
import enTranslation from './en.json';

i18n.use(initReactI18next).init({
  resources: {
    it: { translation: itTranslation },
    en: { translation: enTranslation }
  },
  lng: 'it', // Default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;