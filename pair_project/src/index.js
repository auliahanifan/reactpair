import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
// import App from './App';
// import News from './News';
import MainRoute from "./MainRoute";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "unistore/react";
import { store } from "./store";

ReactDOM.render(
  <Provider store={store}>
    <MainRoute />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
