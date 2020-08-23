import React from "react";

import Form from "../Form";
import InputWithLabel from "../InputWLabel";
import Button from "../Button";

function Modal(props) {
  return (
    <div>
      <div>
        <Form handleSubmit={props.handleSubmit}>
          <InputWithLabel {...props.input} />
          <Button type={props.type}>Post</Button>
        </Form>
      </div>
    </div>
  );
}

export default Modal;
