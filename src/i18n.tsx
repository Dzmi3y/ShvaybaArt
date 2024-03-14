import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import translationEn from "./translation/en/translation.json";
import translationRu from "./translation/ru/translation.json";


const resources = {
    en: {
        global: translationEn,
    },
    ru: {
        global: translationRu,
    },
}

i18next
.use(initReactI18next)
.init({
  resources,
  lng:"en",
});

export default i18next;