import React, { useState } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";

import Form from "../../../components/Form";
import InputWithLabel from "../../../components/InputWLabel";
import Button from "../../../components/Button";

const SIGNUP_ENDPOINT = "/api/auth/signup";

function SignUp() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = {
      email: email,
      name: name,
      password: password,
    };

    fetch(SIGNUP_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log(response);
        return history.push("/login");
      })
      .catch((err) => {
        console.log(err);
        alert("Unable to create user account");
      });
  };

  return (
    <>
      <h3>Sign Up</h3>
      <Form handleSubmit={handleSubmit}>
        <InputWithLabel
          label="Name"
          htmlFor="name"
          stateUpdater={setName}
          value={name}
          type="text"
          id="name"
        />
        <InputWithLabel
          label="Email"
          htmlFor="email"
          stateUpdater={setEmail}
          value={email}
          type="email"
          id="email"
        />
        <InputWithLabel
          label="Password"
          htmlFor="password"
          stateUpdater={setPassword}
          value={password}
          type="password"
          id="password"
        />
        <Button type="submit">Sign Up</Button>
      </Form>
    </>
  );
}

export default SignUp;
