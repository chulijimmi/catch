import NotfoundScreen from "../component/notfound-screen";

// Language injector
import { injectLanguage } from "../../../libutils/injectLanguage";
import language from "../language";

import { useTranslation } from "react-i18next";

/**
 * InjectedComponent function to connect with injected reducers,
 * saga side effects, and internationalize language
 */
export default function InjectedComponent(props) {
  const key = "product";
  const { t, i18n } = useTranslation(["nsProduct"]);

  injectLanguage(language);

  return NotfoundScreen({ t, ...props });
}
