import { useTranslation } from "react-i18next";

// Screen Component
import HomeScreen from "../component/home-screen";

// Language injector
import { injectLanguage } from "../../../libutils/injectLanguage";
import language from "../language";

/**
 * InjectedComponent function to connect with injected reducers,
 * saga side effects, and internationalize language
 */
export default function InjectedComponent(props) {
  const { t, i18n } = useTranslation(["nsHome"]);
  injectLanguage(language);
  return HomeScreen({ t, ...props });
}
