import React from "react";
import "regenerator-runtime/runtime";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";

import { App } from "./components/App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
