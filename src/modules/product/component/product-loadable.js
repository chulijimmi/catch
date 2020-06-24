import React from "react";
import loadable from "../../../libutils/loadable";

export default loadable(() => import("./product-connect"), {
  fallback: <div></div>,
});
