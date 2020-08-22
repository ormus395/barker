import React from "react";
import { Link, useHistory } from "react-router-dom";
import Form from "../Form";
import Button from "../Button";
import { useAuth } from "../../context/AuthContext";

const LOGOUT_ENDPOINT = "/api/auth/logout";

export function AuthenticatedNav() {
  const history = useHistory();
  const { setIsLoggedIn } = useAuth();

  const handleSubmit = (event) => {
    fetch(LOGOUT_ENDPOINT, {
      method: "POST",
    }).then((response) => {
      if (response.status === 200 || response.status === 201) {
        setIsLoggedIn(false);
        history.push("/");
      }
    });
    event.preventDefault();
  };
  return (
    <nav>
      <div>
        <h3>
          <Link to="/">Logo</Link>
        </h3>
      </div>
      <ul>
        <li>
          <Link to="/feed">Feed</Link>
        </li>
        <li>
          <Form handleSubmit={handleSubmit}>
            <Button type="submit">Logout</Button>
          </Form>
        </li>
      </ul>
    </nav>
  );
}

export function UnAuthenticatedNav() {
  return (
    <nav>
      <div>
        <h3>
          <Link to="/">Logo</Link>
        </h3>
      </div>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
}
