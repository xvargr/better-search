import React /*{useEffect}*/ from "react";
import { useState, createContext } from "react";

import Query from "../utils/Query";

export const QueryContext = createContext();

export function QueryContextProvider(props) {
  const [queryInstance] = useState(new Query(""));
  const [currentQuery, setCurrentQuery] = useState(
    queryInstance.getGeneralQuery()
  );
  const [currentExact, setCurrentExact] = useState(queryInstance.exact);
  const [currentExclude, setCurrentExclude] = useState(queryInstance.exclude);
  const [currentSite, setCurrentSite] = useState(queryInstance.site);
  const [currentRange, setCurrentRange] = useState(queryInstance.range);

  function setGeneralQuery(string) {
    queryInstance.setGeneralQuery(string);
    setCurrentQuery(string);
  }

  // todo make search string from queries

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
    if (response) setCurrentSite([...queryInstance.site]);
  }

  function removeSite(string) {
    const response = queryInstance.removeSite(string);
    if (response) setCurrentSite([...queryInstance.site]);
  }

  function addRange(from, to) {
    console.log("in context ", to, from);
    const response = queryInstance.addRange(from, to);
    console.log(queryInstance.range);
    if (response) setCurrentRange(queryInstance.range);
  }

  function removeRange() {
    const response = queryInstance.removeRange();
    if (response) setCurrentRange(queryInstance.range);
  }

  const queryState = {
    queryInstance,
    setGeneralQuery,
    currentQuery,
    currentExact,
    currentExclude,
    currentSite,
    currentRange,
    addExact,
    removeExact,
    addExclude,
    removeExclude,
    addSite,
    removeSite,
    addRange,
    removeRange,
  };

  return (
    <QueryContext.Provider value={queryState}>
      {props.children}
    </QueryContext.Provider>
  );
}
