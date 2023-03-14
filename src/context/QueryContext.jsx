import React from "react";
import { useState, createContext } from "react";

import Query from "../utils/Query";

export const QueryContext = createContext();

export function QueryContextProvider(props) {
  const [queryInstance] = useState(new Query(""));

  const queryState = {
    queryInstance,
  };

  return (
    <QueryContext.Provider value={queryState}>
      {props.children}
    </QueryContext.Provider>
  );
}
