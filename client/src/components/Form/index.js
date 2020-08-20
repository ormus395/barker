import React from "react";

function Form(props) {
  return (
    <div className="form-container">
      <form onSubmit={props.handleSubmit}>{props.children}</form>
    </div>
  );
}

export default Form;
