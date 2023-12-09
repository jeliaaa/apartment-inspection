// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
        lang:'Language',
        explore: 'Explore',
        elevatorName: 'Elevator Name',
        view: 'View Apartments',
        apartments: 'Apartments',
        apartment: 'Apartment',
        address: 'Address',
        entrance : 'Entrance',
        enter: 'Enter apartment number',
        date: 'Date when first owned',
        owners: 'Owners',
        housemaster: 'Housemaster',
        elevator: 'Elevator',
        production: 'Production',
        entranceQuality: 'Entrance',
        renovationQuality: 'Renovation',
        santeqnika: 'plumbing',
        eleqtronika: 'Electronics',
        Internet: 'Internet',
        docs: 'Documentation / History',
        viewPhotos: 'View Photos',
        back: 'Back',
        area: 'Area',
        sqm: 'Sq/M'
    },
  },
  ge: {
    translation: {
        lang:'ენა',
        explore: 'იხილეთ',
        elevatorName: 'ლიფტი',
        apartment: 'ბინა',
        apartments: 'ბინები',
        view: 'ნახვა',
        address: 'მისამართი',
        entrance: 'სადარბაზო',
        enter: 'შეიყვანეთ ბინის ნომერი',
        date: 'დასრულების თარიღი',
        owners: 'მფლობელები',
        housemaster: 'ჰაუსმასტერი',
        elevator: 'ლიფტი',
        production: 'მწარმოებელი',
        entranceQuality: 'სადარბაზო',
        renovationQuality: 'რემონტი',
        santeqnika: 'სანტექნიკა',
        eleqtronika: 'ელექტროობა',
        Internet: 'ინტერნეტი',
        docs: 'დოკუმენტაცია / ისტორია',
        viewPhotos: 'იხ. ფოტოები',
        back: 'უკან',
        area: 'ფართობი',
        sqm: 'კვ/მ'
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
