import React from "react";
import { Link } from "react-router-dom";

import "./Landing.css";

const Landing = () => (
  <main className="container">
    <div className="hero">
      <div className="hero__img">
        <div className="hero__text">
          <p>
            Hello, my name is Jarec Turner and I really enjoy building web apps.
          </p>

          <Link className="btn" to="/blog">
            Check out my blog.
          </Link>
        </div>
      </div>
    </div>
    <section className="about row">
      <div className="about__img"></div>
      <div className="about__text">
        <h3 className="about__title">About Me</h3>
        <p>
          I'm a web developer that currently specializes in JavaScript
          technologies including: Node.js, and React.js. In addition to being a
          web developer, I am currently attending Mesa Community College to
          complete an Associates of Applied Science in Computer Science.
        </p>
        <p>
          When I'm not buidling things, or headbutting keyboards, I like
          spending my time working out, playing video games, or being a
          wonderful Fur Dad and boyfriend. If you're interested in hiring me,{" "}
          <Link to="hire">please click here</Link>
        </p>
      </div>
    </section>
  </main>
);

export default Landing;
