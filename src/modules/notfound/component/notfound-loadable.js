import React from "react";
import loadable from "../../../libutils/loadable";

export default loadable(() => import("./notfound-connect"), {
  fallback: <div>load modules notfound</div>,
});
