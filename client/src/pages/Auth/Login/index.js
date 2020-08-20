import React from "react";

import Form from "../../../components/Form";
import InputWithLabel from "../../../components/InputWLabel";
import Button from "../../../components/Button";

function Login() {
  return (
    <>
      <h3>Login</h3>
      <Form>
        <InputWithLabel label="Email" />
        <InputWithLabel label="Password" />
        <Button type="submit">Login</Button>
      </Form>
    </>
  );
}

export default Login;
