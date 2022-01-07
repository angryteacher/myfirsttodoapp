import "./assets/global.scss";

import { loadableReady } from "@loadable/component";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const renderApp = (Comp?: any) => {
  ReactDOM.render(<Comp />, document.getElementById("root"));
};

loadableReady(() => {
  renderApp(App);
}).finally();

if ((module as any).hot) {
  (module as any).hot.accept("./App", () => {
    const NewApp = require("./App").default;

    renderApp(NewApp);
  });
}
