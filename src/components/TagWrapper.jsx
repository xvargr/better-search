import React from "react";

export default function TagWrapper(props) {
  let displayText;

  // todo make tag color and text reactive
  switch (props.type) {
    case "exact":
      displayText = "Exact";
      break;

    case "exclude":
      displayText = "Exclude";
      break;

    case "site":
      displayText = "From site";
      break;

    case "range":
      displayText = "Range";
      break;

    default:
      console.error("invalid type field for TagWrapper component");
      return null;
  }

  return (
    <div className="flex p-1 items-center gap-1 bg-gray-400 rounded-full">
      <span className="mx-1 font-semibold text-white">{displayText}</span>
      {props.children}
    </div>
  );
}
