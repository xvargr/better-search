import React from "react";
import { useState, createContext } from "react";

import Query from "../utils/Query";

export const QueryContext = createContext();

export function QueryContextProvider(props) {
  const [queryInstance] = useState(new Query(""));
  const [currentQuery, setCurrentQuery] = useState(queryInstance.getRawQuery());

  function setRawQuery(string) {
    queryInstance.setRawQuery(string);
    setCurrentQuery(string);
  }

  const queryState = {
    queryInstance,
    setRawQuery,
    currentQuery,
  };

  return (
    <QueryContext.Provider value={queryState}>
      {props.children}
    </QueryContext.Provider>
  );
}
