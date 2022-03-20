import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app_router";
import reportWebVitals from "./reportWebVitals";
import { Main } from "./Presentation/Main/main";
import { Provider } from "react-redux";
import { BrowserRouter, Router } from "react-router-dom";
import { store } from "./Application/redux_store";
import AppRouter from "./app_router";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
