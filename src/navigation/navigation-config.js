import Home from "../modules/home/component/home-loadable";
import Notfound from "../modules/notfound/component/notfound-loadable";

/**
 * Navigation Configuration
 */
const NavigationConfig = [
  {
    exact: true,
    path: "/",
    uriLabel: "Home",
    component: Home,
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
