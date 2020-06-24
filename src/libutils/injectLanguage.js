import i18next from "i18next";

/**
 * Inject language based on json file
 * @use
 * the structure should be an
 * {
 *  en: { namespace: { key: '' }}
 * }
 * @param {Object} jsonFile
 */
export const injectLanguage = (jsonFile) => {
  let locale;
  let nameSpace;
  let subLanguage;
  for (var lng in jsonFile) {
    locale = lng;
    const key = jsonFile[lng];
    for (var ns in key) {
      nameSpace = ns;
      subLanguage = key[ns];
      i18next.addResourceBundle(locale, nameSpace, { ...subLanguage });
    }
  }
};

/**
 * Set language using string id or en
 * @param {String} language
 */
export const setCurrentLanguage = (language) => {
  i18next.changeLanguage(language);
};

// To get current language
export const getCurrentLanguage = () => {
  try {
    const lng = i18next.language;
    if (lng === "en") return "English";
    else if (lng === "id") return "Indonesia";
    else return "Change Language";
  } catch (error) {
    throw error;
  }
};
