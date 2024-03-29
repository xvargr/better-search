import React, { useContext } from "react";
import { QueryContext } from "../context/QueryContext";
import { XMarkIcon } from "@heroicons/react/20/solid";

export default function Tag({ type, value }) {
  const { removeExact, removeExclude, removeSite, removeRange } =
    useContext(QueryContext);

  if (!type) console.error("type field is required for Tag component");

  switch (type) {
    case "exact":
      return (
        <div className="py-1 px-2 flex items-center rounded-full bg-googleBlue text-white">
          {value}
          <XMarkIcon
            className="w-5 cursor-pointer"
            onClick={() => removeExact(value)}
          />
        </div>
      );

    case "exclude":
      return (
        <div className="py-1 px-2 flex items-center rounded-full bg-googleRed text-white">
          {value}
          <XMarkIcon
            className="w-5 cursor-pointer"
            onClick={() => removeExclude(value)}
          />
        </div>
      );

    case "site":
      return (
        <div className="py-1 px-2 flex items-center rounded-full bg-googleGreen text-white">
          {value}
          <XMarkIcon
            className="w-5 cursor-pointer"
            onClick={() => removeSite(value)}
          />
        </div>
      );

    case "range":
      return (
        <div className="py-1 px-2 flex items-center rounded-full bg-googleYellow text-white">
          {`from ${value.from} to ${value.to}`}
          <XMarkIcon
            className="w-5 cursor-pointer"
            onClick={() => removeRange()}
          />
        </div>
      );

    default:
      console.error("invalid type value for Type component");
      break;
  }
}
