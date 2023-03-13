import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import "./index.css";

const searchBarClass = ".RNNXgb";
const searchBar = document.querySelector(searchBarClass);
const root = document.createElement("div");
root.id = "bs-root";

function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
insertAfter(searchBar, root);

// searchBar.append(root);

ReactDOM.createRoot(document.getElementById("bs-root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
