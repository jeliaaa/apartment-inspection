// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
        lang:'Language'
    },
  },
  ge: {
    translation: {
        lang:'ენა'
    },
  },
  // Add more languages and translations as needed
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ge", // Default language
  interpolation: {
    escapeValue: false, // React already escapes by default
  },
});

export default i18n;
