import i18next from "i18next";
// import { initReactI18next } from "react-i18next";
import ns1 from "./it.json";
import ns2 from "./en.json";

export const defaultNS = "ns1";

i18next
  // .use(initReactI18next)
  .init({
    lng: "it",
    debug: true,
    resources: {
      it: {
        ns1,
      },
      en: {
        ns2,
      },
    },
    defaultNS,
  })
  .then((r) => {});

export default i18next;
