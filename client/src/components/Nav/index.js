import React from "react";
import { Link } from "react-router-dom";

function Nav() {
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
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
