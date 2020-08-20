import React from "react";

function InputWithLabel(props) {
  return (
    <>
      <label htmlFor="">{props.label}</label>
      <input type="text" />
    </>
  );
}

export default InputWithLabel;
