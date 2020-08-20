import React from "react";

function Form(props) {
  return (
    <div className="form-container">
      <form action="">{props.children}</form>
    </div>
  );
}

export default Form;
