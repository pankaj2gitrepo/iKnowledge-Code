import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
//import store from "./store/index";
import storeWithToolkit from "./store/indexWithReduxToolkit";

ReactDOM.render(
  //<Provider store={store}>
  <Provider store={storeWithToolkit}>
    <App />
  </Provider>,
  document.getElementById("root")
);
