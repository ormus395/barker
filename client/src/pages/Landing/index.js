import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Landing.css";
import aboutImg from "./about-img.JPG";
const Landing = () => (
  <div className="container hero-container">
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
      <div className="about__img">
        <img src={aboutImg} alt="" />
      </div>
      <div className="about__skills">
        <h3 className="skills__title">Skills</h3>
        <ul className="row skills__items">
          <li className="skills__item">
            <FontAwesomeIcon className="skill__icon" icon={["fab", "react"]} />
          </li>
          <li className="skills__item">
            <FontAwesomeIcon
              className="skill__icon"
              icon={["fab", "node-js"]}
            />
          </li>
          <li className="skills__item">
            <FontAwesomeIcon className="skill__icon" icon={["fab", "js"]} />
          </li>
          <li className="skills__item">
            <FontAwesomeIcon className="skill__icon" icon={["fab", "html5"]} />
          </li>
          <li className="skills__item">
            <FontAwesomeIcon className="skill__icon" icon={["fab", "css3"]} />
          </li>
        </ul>
      </div>
    </section>
  </div>
);

export default Landing;
