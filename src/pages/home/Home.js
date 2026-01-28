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
            I am currently a third-year student in Information Technology at Vaasa University of Applied Sciences, specialising in embedded systems. Currently, I am focusing on embedded systems, with an emphasis on microcontrollers, electronics, and PCB design.
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
