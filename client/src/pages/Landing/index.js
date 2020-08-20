import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <div className="hero">
        <div className="hero__text">
          <h1 className="hero__title">
            Barker, a community for those who love dogs!
          </h1>
          <p className="hero__description">
            Barker creates a specialized platform for people to share all things
            dogs! Think your dog is cute (which he is); create an account an
            share Fido with friends, family and the community.
          </p>
          <Link to="/signup" className="btn btn--cta">
            Sign Up For Free
          </Link>
        </div>
        <div className="hero__img">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Landing;
