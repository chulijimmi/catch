import i18n from "../../i18n";
import {
  injectLanguage,
  setCurrentLanguage,
  getCurrentLanguage,
} from "../injectLanguage";

describe("injectLanguage test", () => {
  const language = {
    en: {
      nsTest: {
        title: "Test",
      },
    },
    id: {
      nsTest: {
        title: "Coba",
      },
    },
  };

  it("should store en and id language", () => {
    injectLanguage(language);
    expect(i18n.store.data).toEqual(language);
  });

  it("should set language id", () => {
    setCurrentLanguage("id");
    expect(i18n.language).toEqual("id");
  });

  it("should get language Indonesia", () => {
    const currentLanguage = getCurrentLanguage();
    expect(currentLanguage).toEqual("Indonesia");
  });
});
