import React, { useContext, useMemo } from "react";
import { QueryContext } from "../context/QueryContext";

function General() {
  const { currentQuery, setRawQuery, currentExact } = useContext(QueryContext);

  function renderExact() {
    const result = [];

    currentExact.forEach((phrase) => {
      result.push(
        <div className="bg-red" key={phrase}>
          {phrase}
        </div>
      );
    });

    return result;
  }

  const exacts = useMemo(() => renderExact(), [JSON.stringify(currentExact)]);

  return (
    <div className="bg-gray-300 w-full py-1 px-2 rounded-full flex justify-around items-center">
      <span className="rounded-full w-full py-0.5 px-1 text-gray-800 bg-white bg-opacity-50 hover:bg-opacity-60">
        <input
          className="bg-white bg-opacity-0 outline-none"
          type="text"
          value={currentQuery}
          onChange={(e) => {
            setRawQuery(e.target.value);
          }}
        ></input>
        {exacts}
        <span>hello</span>
      </span>
    </div>
  );
}

function Range() {
  return (
    <div className="bg-googleYellow py-1 px-2 rounded-full grow flex justify-around items-center">
      <span className="pr-2 font-semibold text-white">Range</span>
      <div className="flex grow justify-around max-w-[16rem]">
        <input
          className="rounded-full max-w-[5rem] grow py-0.5 px-1 outline-none text-gray-800 bg-white bg-opacity-50 hover:bg-opacity-60"
          type="text"
        ></input>
        <span className="font-semibold text-white"> to </span>
        <input
          className="rounded-full max-w-[5rem] grow py-0.5 px-1 outline-none text-gray-800 bg-white bg-opacity-50 hover:bg-opacity-60"
          type="text"
        ></input>
      </div>
    </div>
  );
}

function Exact() {
  const { queryInstance, addExact } = useContext(QueryContext);

  function handleEnter(e) {
    if (e.key !== "Enter" || e.target.value.length === 0) return null;

    addExact(e.target.value);
    console.log("exact: ", queryInstance.exact);
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
  return (
    <div className="bg-googleRed py-1 px-2 rounded-full grow flex justify-around items-center">
      <span className="pr-2 font-semibold text-white">Exclude</span>
      <input
        className="rounded-full min-w-[5rem] grow py-0.5 px-1 outline-none text-gray-800 bg-white bg-opacity-50 hover:bg-opacity-60"
        type="text"
      ></input>
    </div>
  );
}

function Site() {
  return (
    <div className="bg-googleGreen py-1 px-2 rounded-full grow flex justify-around items-center">
      <span className="pr-2 font-semibold text-white">Site</span>
      <input
        className="rounded-full min-w-[5rem] grow py-0.5 px-1 outline-none text-gray-800 bg-white bg-opacity-50 hover:bg-opacity-60"
        type="text"
      ></input>
    </div>
  );
}

export default function RefinementField({ type, value = "" }) {
  if (!type)
    console.error("type field is required for RefinementField component");

  switch (type) {
    case "general":
      return <General value={value} />;

    case "exclude":
      return <Exclude value={value} />;

    case "exact":
      return <Exact value={value} />;

    case "range":
      return <Range value={value} />;

    case "site":
      return <Site value={value} />;
    default:
      console.error("invalid type value for RefinementField component");
      break;
  }
}
