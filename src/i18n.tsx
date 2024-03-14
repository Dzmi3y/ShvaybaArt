import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import globalEn from "./translation/en/global.json";
import globalRu from "./translation/ru/global.json";
import page404En from "./translation/en/404page.json";
import page404Ru from "./translation/ru/404page.json";


const resources = {
    en: {
        global: globalEn,
        page404: page404En,
    },
    ru: {
        global: globalRu,
        page404: page404Ru,
    },
}

i18next
.use(initReactI18next)
.init({
  resources,
  lng:"en",
});

export default i18next;