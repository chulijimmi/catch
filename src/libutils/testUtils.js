import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import "@testing-library/jest-dom/extend-expect";
import "../i18n";

/**
 * Render function due to test unit
 * @param {Component} ui
 * @param {Object} Store
 */
function render(ui, { store = configureStore({}), ...renderOptions } = {}) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { render };
