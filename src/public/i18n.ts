import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import ns1 from '/src/it.json';
import ns2 from '/src/en.json';

export const defaultNS = 'ns1';

i18next
  .use(initReactI18next)
  .init({
    lng: 'it',
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
  .then((r: any) => {()=>{console.log(r)}});

export default i18next;