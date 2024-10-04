import React from "react";
import Profile from "../../assets/avatar.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="profile" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Nguyen</span> <br />
            Embedded System Student
            <br />
            Software and Web developer
          </h1>

          <p className="home__description">
            I am an Information Technology student specializing in embedded systems, with a strong passion for research in electronics and IoT. Alongside my focus on embedded systems, I have a solid background in software and web development. My programming skills include Python, C, Java, JavaScript, and TypeScript, with experience in libraries and frameworks like React, React Router, and Redux.
          </p>

          <Link to="/about" className="button">
            More About me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
};
export default Home;
