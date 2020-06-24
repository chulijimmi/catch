/**
 * index.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import "@babel/polyfill";

// Internationalize with i18next
import "./i18n";

// Style global css
import "./layouts/style/global.css";

// Import all the third party stuff
import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";

export const MOUNT_NODE = document.getElementById("app");

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  MOUNT_NODE
);
