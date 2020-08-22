import React from "react";

/**
 * accepts handleSubmit through props to allow abstracted logic
 */

function Form(props) {
  return (
    <div className="form-container">
      <form onSubmit={props.handleSubmit}>{props.children}</form>
    </div>
  );
}

export default Form;
