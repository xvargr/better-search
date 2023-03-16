import React, { useEffect, useMemo } from "react";
import { useState, createContext } from "react";

import Query from "../utils/Query";

export const QueryContext = createContext();

export function QueryContextProvider(props) {
  const [queryInstance] = useState(new Query(""));
  const [currentQuery, setCurrentQuery] = useState(queryInstance.getRawQuery());
  const [currentExact, setCurrentExact] = useState(queryInstance.exact);

  // useEffect(() => {
  //   console.log("exact changed");
  //   setCurrentExact(queryInstance.exact);
  // }, [queryInstance]);

  // useMemo(() => {
  //   console.log("exact changed");
  //   setCurrentExact(queryInstance.exact);
  // }, [queryInstance.exact]);

  function setRawQuery(string) {
    queryInstance.setRawQuery(string);
    setCurrentQuery(string);
  }

  function addExact(string) {
    queryInstance.addExact(string);
    setCurrentExact(queryInstance.exact);
  }

  // function removeExact(string) {
  //   queryInstance.removeExact(string);
  //   setCurrentExact(queryInstance.exact);
  // }

  const queryState = {
    queryInstance,
    setRawQuery,
    currentQuery,
    currentExact,
    addExact,
    // removeExact,
  };

  return (
    <QueryContext.Provider value={queryState}>
      {props.children}
    </QueryContext.Provider>
  );
}
