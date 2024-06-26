import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import globalEn from "./translation/en/global.json";
import globalRu from "./translation/ru/global.json";
import page404En from "./translation/en/404page.json";
import page404Ru from "./translation/ru/404page.json";
import homeEn from "./translation/en/home.json";
import homeRu from "./translation/ru/home.json";
import aboutEn from "./translation/en/about.json";
import aboutRu from "./translation/ru/about.json";
import galleryEn from "./translation/en/gallery.json";
import galleryRu from "./translation/ru/gallery.json";
import calendarEn from "./translation/en/calendar.json";
import calendarRu from "./translation/ru/calendar.json";



const resources = {
    en: {
        global: globalEn,
        page404: page404En,
        home:homeEn,
        about:aboutEn,
        gallery:galleryEn,
        calendar:calendarEn
    },
    ru: {
        global: globalRu,
        page404: page404Ru,
        home:homeRu,
        about:aboutRu,
        gallery:galleryRu,
        calendar:calendarRu
    },
}

i18next
.use(initReactI18next)
.init({
  resources,
  lng:"en",
});

export default i18next;