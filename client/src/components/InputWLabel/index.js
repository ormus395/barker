import React from "react";

/**
 * accepts props
 * props:
 * stateUpdater, to allow logic to be controlled by parent component
 *    requiring the input
 * htlmFor, label, id, name, type, value
 */
function InputWithLabel(props) {
  const handleChange = (event) => {
    return props.stateUpdater(event.target.value);
  };

  return (
    <>
      <label htmlFor={props.htmlFor}>{props.label}</label>
      <input
        id={props.id}
        name={props.name}
        type={props.type || "text"}
        value={props.value}
        onChange={handleChange}
      />
    </>
  );
}

export default InputWithLabel;
