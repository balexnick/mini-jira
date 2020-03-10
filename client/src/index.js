import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "index.css";
import { createStore, applyMiddleware } from "redux";
import { rootReduser } from "reducers/reducers";
// import logger from "redux-logger";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import "react-toastify/dist/ReactToastify.css";

export const browserHistory = createBrowserHistory();
export const store = createStore(rootReduser, applyMiddleware(thunk));
// ,logger

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
