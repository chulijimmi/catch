import Product from "../modules/product/component/product-loadable";
import Notfound from "../modules/notfound/component/notfound-loadable";

/**
 * Navigation Configuration
 */
const NavigationConfig = [
  {
    exact: true,
    path: "/",
    uriLabel: "Product",
    component: Product,
    testId: "nav-home",
  },
  {
    exact: false,
    path: "*",
    uriLabel: "Notfound",
    component: Notfound,
    testId: "nav-notfound",
  },
];

export default NavigationConfig;
