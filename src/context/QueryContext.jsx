import React, { useEffect, useMemo } from "react";
import { useState, createContext } from "react";

import Query from "../utils/Query";

export const QueryContext = createContext();

export function QueryContextProvider(props) {
  const [queryInstance] = useState(new Query(""));
  const [currentQuery, setCurrentQuery] = useState(queryInstance.getRawQuery());
  const [currentExact, setCurrentExact] = useState(queryInstance.exact);
  const [currentExclude, setCurrentExclude] = useState(queryInstance.exclude);
  const [currentSite, setCurrentSite] = useState(queryInstance.exclude);

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
    const response = queryInstance.addExact(string);
    if (response) setCurrentExact([...queryInstance.exact]);
  }

  function removeExact(string) {
    const response = queryInstance.removeExact(string);
    if (response) setCurrentExact([...queryInstance.exact]);
  }

  function addExclude(string) {
    const response = queryInstance.addExclude(string);
    if (response) setCurrentExclude([...queryInstance.exclude]);
  }

  function removeExclude(string) {
    const response = queryInstance.removeExclude(string);
    if (response) setCurrentExclude([...queryInstance.exclude]);
  }

  function addSite(string) {
    const response = queryInstance.addSite(string);
    if (response) setCurrentSite([...queryInstance.exclude]);
  }

  function removeSite(string) {
    const response = queryInstance.removeSite(string);
    if (response) setCurrentSite([...queryInstance.exclude]);
  }

  const queryState = {
    queryInstance,
    setRawQuery,
    currentQuery,
    currentExact,
    currentExclude,
    currentSite,
    addExact,
    removeExact,
    addExclude,
    removeExclude,
    addSite,
    removeSite,
  };

  return (
    <QueryContext.Provider value={queryState}>
      {props.children}
    </QueryContext.Provider>
  );
}
