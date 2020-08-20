import React from "react";

import Form from "../../../components/Form";
import InputWithLabel from "../../../components/InputWLabel";
import Button from "../../../components/Button";

function SignUp() {
  return (
    <>
      <h3>Sign Up</h3>
      <Form>
        <InputWithLabel label="Name" />
        <InputWithLabel label="Email" />
        <InputWithLabel label="Password" />
        <Button type="submit">Sign Up</Button>
      </Form>
    </>
  );
}

export default SignUp;
