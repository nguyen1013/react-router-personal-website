import React from 'react';
import Profile from '../../assets/home.jpg'
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
            <span>I'm AI Assistant.</span> <br/> Web developer
          </h1>

          <p className="home__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quisquam animi similique ut laborum, eum magni ullam rerum obcaecati in consequatur modi quos veniam aperiam perspiciatis. Optio mollitia soluta ratione.
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