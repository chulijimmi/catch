import React from "react";
import loadable from "../../../libutils/loadable";

export default loadable(() => import("./home-connect"), {
  fallback: <div>load modules home</div>,
});
