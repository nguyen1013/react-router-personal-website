import React from 'react';
import Profile from '../../assets/avatar.png'
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './home.css';

const Home = () => {
  return (
    <section className='home section grid'>
      <img src={Profile} alt="profile" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Nguyen</span> <br/>Software and Web developer
          </h1>

          <p className="home__description">
          I am an Information Technology student aspiring to become a software and web developer. My programming skills include JavaScript, TypeScript, C, Python, and Java. For front-end development, I am proficient in libraries and frameworks such as React, React Router, and Redux. To broaden my expertise, I am currently exploring cloud computing services and expanding my knowledge in full-stack development.
          </p>

          <Link to="/about" className="button">
            More About me {' '} 
            <span className="button__icon">
            <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  )
}
export default Home