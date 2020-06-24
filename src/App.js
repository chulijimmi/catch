import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavigationConfig from "./navigation/navigation-config";
import configureStore from "libutils/configureStore";

//Store Redux Configuration
const initialState = {};
const store = configureStore(initialState);

// App core modules navigation
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          {NavigationConfig.map((route) => (
            <Route
              key={route.uriLabel}
              path={route.path}
              exact={route.exact}
              children={<route.component />}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

/**
 * Main apps include with provider redux context
 */
function Main() {
  return (
    <Provider store={store}>
      <App></App>
    </Provider>
  );
}

export default Main;
