import React from "react";

function General({ value }) {
  return (
    <div className="bg-gray-400 w-full py-1 px-2 rounded-full flex justify-around items-center">
      <input
        className="rounded-full w-full py-0.5 px-1 outline-none text-gray-800 bg-white bg-opacity-50 hover:bg-opacity-60"
        type="text"
        value={value}
        onChange={() => console.log("change")}
      ></input>
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
  return (
    <div className="bg-googleBlue py-1 px-2 rounded-full grow flex justify-around items-center">
      <span className="pr-2 font-semibold text-white">Exact</span>
      <input
        className="rounded-full min-w-[5rem] grow py-0.5 px-1 outline-none text-gray-800 bg-white bg-opacity-50 hover:bg-opacity-60"
        type="text"
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
