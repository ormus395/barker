import React from "react";
import { useHistory } from "react-router-dom";

import Form from "../../../components/Form";
import InputWithLabel from "../../../components/InputWLabel";
import Button from "../../../components/Button";

const LOGIN_ENDPOINT = "/api/auth/login";

function Login(props) {
  const history = useHistory();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const data = {
    email: email,
    password: password,
  };

  const handleSubmit = (event) => {
    console.log(email, password);
    event.preventDefault();

    fetch(LOGIN_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log(typeof response.status);
        if (response.status === 401) {
          console.log("blocked login");
          return Promise.reject("Unable to login");
        }
        return response.json();
      })
      .then((jsonReponse) => {
        console.log(jsonReponse);
        alert("Logged in successfully");
        props.setIsLoggedIn(true);
        history.push("/feed");
      })
      .catch((err) => {
        console.log(err);
        alert("Failure logging in");
      });
  };
  return (
    <>
      <h3>Login</h3>
      <Form handleSubmit={handleSubmit}>
        <InputWithLabel
          label="Email"
          stateUpdater={setEmail}
          htmlFor="email"
          id="email"
          type="email"
          value={email}
        />
        <InputWithLabel
          label="Password"
          stateUpdater={setPassword}
          id="password"
          name="password"
          type="password"
          value={password}
        />
        <Button type="submit">Login</Button>
      </Form>
    </>
  );
}

export default Login;
