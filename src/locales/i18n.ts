import ja from './ja.json';
import en from './en.json';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          translation: en
        },
        ja: {
          translation: ja
        }
      },
      lng: 'en', // default language
      fallbackLng: 'en', // default language
      interpolation: {
        escapeValue: false
      }
    });

export default i18n;

