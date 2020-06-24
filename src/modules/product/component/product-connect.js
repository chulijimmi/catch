import { useTranslation } from "react-i18next";

//Language injector
import { injectLanguage } from "../../../libutils/injectLanguage";
import language from "../language";

// Component related
import ProductScreen from "./product-screen";

/**
 * InjectedComponent function to connect with injected reducers,
 * saga side effects, and internationalize language
 */
export default function InjectedComponent(props) {
  const { t, i18n } = useTranslation(["nsHome"]);
  injectLanguage(language);
  return ProductScreen({ t, ...props });
}
