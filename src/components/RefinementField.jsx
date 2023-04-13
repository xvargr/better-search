import React, { useContext, useRef } from "react";
import { QueryContext } from "../context/QueryContext";

import TagWrapper from "./TagWrapper";
import Tag from "./Tag";

function General() {
  const { currentExact, currentExclude, currentSite, currentRange } =
    useContext(QueryContext);

  function renderExact() {
    const result = [];

    currentExact.forEach((phrase) => {
      result.push(<Tag type="exact" value={phrase} key={`i-${phrase}`} />);
    });
    if (result.length > 0) {
      return <TagWrapper type="exact">{result}</TagWrapper>;
    }
  }

  function renderExclude() {
    const result = [];

    currentExclude.forEach((phrase) => {
      result.push(<Tag type="exclude" value={phrase} key={`e-${phrase}`} />);
    });

    if (result.length > 0) {
      return <TagWrapper type="exclude">{result}</TagWrapper>;
    }
  }

  function renderSite() {
    const result = [];

    currentSite.forEach((phrase) => {
      result.push(<Tag type="site" value={phrase} key={`s-${phrase}`} />);
    });

    if (result.length > 0) {
      return <TagWrapper type="site">{result}</TagWrapper>;
    }
  }

  function renderRange() {
    if (currentRange.from) {
      return (
        <TagWrapper type="range">
          <Tag
            type="range"
            value={currentRange}
            key={`r-${currentRange.from}`}
          />
        </TagWrapper>
      );
    }
  }

  return (
    <div className="bg-gray-300 w-full p-1 rounded-lg flex justify-around items-center">
      <span className="rounded-lg w-full min-h-[2.75rem] p-0.5 flex flex-wrap gap-1 text-gray-800 bg-white bg-opacity-50">
        {renderExact()}
        {renderExclude()}
        {renderSite()}
        {renderRange()}
      </span>
    </div>
  );
}

function Range() {
  const { addRange } = useContext(QueryContext);
  const rangeFromRef = useRef();
  const rangeToRef = useRef();

  function handleEnter(e) {
    if (
      e.key !== "Enter" ||
      rangeFromRef.current.value.length === 0 ||
      rangeToRef.current.value.length === 0
    )
      return null;

    addRange(rangeFromRef.current.value, rangeToRef.current.value);
    rangeFromRef.current.value = "";
    rangeToRef.current.value = "";
    e.preventDefault();
  }

  return (
    <div className="bg-googleYellow py-1 px-2 rounded-full grow flex justify-around items-center">
      <span className="pr-2 font-semibold text-white">Range</span>
      <div className="flex grow justify-around max-w-[16rem]">
        <input
          className="rounded-full max-w-[5rem] grow py-0.5 px-1 outline-none text-gray-800 bg-white bg-opacity-50 hover:bg-opacity-60"
          ref={rangeFromRef}
          type="number"
          onKeyDown={(e) => handleEnter(e)}
        ></input>
        <span className="font-semibold text-white"> to </span>
        <input
          className="rounded-full max-w-[5rem] grow py-0.5 px-1 outline-none text-gray-800 bg-white bg-opacity-50 hover:bg-opacity-60"
          ref={rangeToRef}
          type="number"
          onKeyDown={(e) => handleEnter(e)}
        ></input>
      </div>
    </div>
  );
}

function Exact() {
  const { addExact } = useContext(QueryContext);

  function handleEnter(e) {
    if (e.key !== "Enter" || e.target.value.length === 0) return null;

    addExact(e.target.value);
    e.target.value = "";
    e.preventDefault();
  }

  return (
    <div className="bg-googleBlue py-1 px-2 rounded-full grow flex justify-around items-center">
      <span className="pr-2 font-semibold text-white">Exact</span>
      <input
        className="rounded-full min-w-[5rem] grow py-0.5 px-1 outline-none text-gray-800 bg-white bg-opacity-50 hover:bg-opacity-60"
        type="text"
        onKeyDown={(e) => handleEnter(e)}
      ></input>
    </div>
  );
}

function Exclude() {
  const { addExclude } = useContext(QueryContext);

  function handleEnter(e) {
    if (e.key !== "Enter" || e.target.value.length === 0) return null;

    addExclude(e.target.value);
    e.target.value = "";
    e.preventDefault();
  }

  return (
    <div className="bg-googleRed py-1 px-2 rounded-full grow flex justify-around items-center">
      <span className="pr-2 font-semibold text-white">Exclude</span>
      <input
        className="rounded-full min-w-[5rem] grow py-0.5 px-1 outline-none text-gray-800 bg-white bg-opacity-50 hover:bg-opacity-60"
        type="text"
        onKeyDown={(e) => handleEnter(e)}
      ></input>
    </div>
  );
}

function Site() {
  const { addSite } = useContext(QueryContext);

  function handleEnter(e) {
    if (e.key !== "Enter" || e.target.value.length === 0) return null;

    addSite(e.target.value);
    e.target.value = "";
    e.preventDefault();
  }

  return (
    <div className="bg-googleGreen py-1 px-2 rounded-full grow flex justify-around items-center">
      <span className="pr-2 font-semibold text-white">Site</span>
      <input
        className="rounded-full min-w-[5rem] grow py-0.5 px-1 outline-none text-gray-800 bg-white bg-opacity-50 hover:bg-opacity-60"
        type="text"
        onKeyDown={(e) => handleEnter(e)}
      ></input>
    </div>
  );
}

export default function RefinementField({ type, externalInputId }) {
  if (!type)
    console.error("type field is required for RefinementField component");

  switch (type) {
    case "general":
      return <General externalInputId={externalInputId} />;

    case "exclude":
      return <Exclude />;

    case "exact":
      return <Exact />;

    case "range":
      return <Range />;

    case "site":
      return <Site />;
    default:
      console.error("invalid type value for RefinementField component");
      break;
  }
}
