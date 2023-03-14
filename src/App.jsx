import React from "react";
import { useEffect, useState, useContext } from "react";
import RefinementField from "./components/RefinementField";

import { QueryContext } from "./context/QueryContext";

function App({ suggestionsId, inputId }) {
  const { queryInstance } = useContext(QueryContext);
  const [suggestionsVisible, setSuggestionsVisible] = useState(false);
  const [queryState, setQueryState] = useState("");

  // external elements
  const suggestions = document.querySelector(suggestionsId);
  const inputBox = document.querySelector(inputId);

  useEffect(() => {
    // initialize first value
    queryInstance.setRawQuery(inputBox.value);
    setQueryState(queryInstance.getRawQuery());

    function handleInputChange(e) {
      queryInstance.setRawQuery(e.target.value);
      setQueryState(queryInstance.getRawQuery());
    }

    function handleSuggestionsStyleChange() {
      if (suggestions.style.display === "none") setSuggestionsVisible(false);
      else setSuggestionsVisible(true);
    }

    const mutationsObserver = new MutationObserver(function (mutations) {
      mutations.forEach(function () {
        handleSuggestionsStyleChange();
      });
    });

    // attach mutation observer to suggestions, way to track if suggestions are visible
    mutationsObserver.observe(suggestions, {
      attributes: true,
      attributeFilter: ["style"],
    });

    // attach onInput listener to external text input element
    inputBox.oninput = handleInputChange;
  }, []);

  if (!suggestionsVisible) return null;
  else
    return (
      <div className="w-full h-auto p-2 flex flex-wrap gap-1 items-center bg-slate-100 text-lightText dark:text-darkText shadow-sides font-sans">
        <RefinementField type="general" value={queryState} />
        <RefinementField type="exact" />
        <RefinementField type="exclude" />
        <RefinementField type="range" />
        <RefinementField type="site" />
      </div>
    );
}

export default App;
