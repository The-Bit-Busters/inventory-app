import React from "react";
import { createRoot } from "react-dom/client";
import "regenerator-runtime/runtime";
import { BrowserRouter } from "react-router-dom";

import { App } from "./components/App";

const root = createRoot(document.getElementById("root"));

if (process.env.NODE_ENV === "development") {
  require("react-refresh/runtime").injectIntoGlobalHook(window);
}

root.render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);