/**
 * Internationalize Configuration
 * https://react.i18next.com/latest/using-with-hooks
 */

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {},
    lng: "en",
    fallbackLng: "en", // use en if detected lng is not available
    keySeparator: true, // default not use keys in translate message
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
