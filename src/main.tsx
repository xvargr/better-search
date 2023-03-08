import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// RNNXgb is the google.com search bar element
ReactDOM.createRoot(document.querySelector(".RNNXgb") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
