import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryContextProvider } from "./context/QueryContext";
import "./index.css";

const searchBarClass = ".RNNXgb";
const suggestionsId = ".UUbT9";
const inputId = ".gLFyf";

const searchBar = document.querySelector(searchBarClass);
const root = document.createElement("div");
root.id = "bs-root";

function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

if (!searchBar) console.warn("search bar not found, Better Search pausing");

if (searchBar) {
  insertAfter(searchBar, root);

  ReactDOM.createRoot(document.getElementById("bs-root")).render(
    <React.StrictMode>
      <QueryContextProvider>
        <App suggestionsId={suggestionsId} inputId={inputId} />
      </QueryContextProvider>
    </React.StrictMode>
  );
}
