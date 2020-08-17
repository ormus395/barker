import React from "react";
import { Link } from "react-router-dom";

import "./nav.css";

const Nav = () => (
  <nav className="container row nav">
    <div className="logo">
      <Link to="/">Logo</Link>
    </div>
    <ul className="row nav__items">
      <li className="nav__item">
        <Link to="/hire">Hire Me</Link>
      </li>
      <li className="nav__item">
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li className="nav__item">
        <Link to="/blog">Blog</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
