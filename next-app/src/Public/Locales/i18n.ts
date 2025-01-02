import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import it from "./it.json";
import en from "./en.json";

i18next
  .use(initReactI18next)
  .init({
    lng: "it",
    debug: true,
    resources: {
      it: {
        translation: it,
      },
      en: {
        translation: en,
      },
    },
  })
  .then((response) => {
    console.log(response);
  });

export default i18next;
