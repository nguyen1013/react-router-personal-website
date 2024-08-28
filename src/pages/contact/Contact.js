import React from 'react';
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaDribbble, 
  FaGithub,
  FaGithubSquare,
  FaGithubAlt,
} from 'react-icons/fa';

import { FiSend } from 'react-icons/fi';
import './contact.css';

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Contact me</h3>

          <p className="contact__description">
          If you're interested in hiring me, feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities to contribute to your vision.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />

              <div>
                <span className='info__title'>Mail me</span>
                <h4 className="info__desc"><a href="mailto:nasongnguyen@gmail.com" className='info__desc-link' >nasongnguyen@gmail.com</a></h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />

              <div>
                <span className='info__title'>Call me</span>
                <h4 className="info__desc"><a href="tel:+358417213228" className='info__desc-link' >+358 41 721 3228</a></h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />

              <div>
                <span className='info__title'>My GitHub</span>
                <h4 className="info__desc"><a href="https://github.com/nguyen1013" target='_blank' rel="noreferrer" className='info__desc-link' >https://github.com/nguyen1013</a></h4>
              </div>
            </div>
          </div>

          {/* <div className="contact__socials">
            <a href="https://facebook.com" className="contact__social-link">
              <FaFacebookF />
            </a>

            <a href="https://twitter.com" className="contact__social-link">
              <FaTwitter />
            </a>

            <a href="https://youtube.com" className="contact__social-link">
              <FaYoutube />
            </a>

            <a href="https://dribbble.com" className="contact__social-link">
              <FaDribbble />
            </a>
          </div> */}
        </div>

        <form className="contact__form">
        <div className="form__input-group">
          <div className="form__input-div">
            <input
              type="text"
              placeholder="Your Name"
              className="form__control" 
            />
          </div>

          <div className="form__input-div">
            <input
              type="email"
              placeholder="Your Email"
              className="form__control" 
            />
          </div>

          <div className="form__input-div">
            <input
              type="text"
              placeholder="Your Subject"
              className="form__control" 
            />
          </div>
        </div>

        <div className="form__input-div">
          <textarea 
            placeholder={`Your Message\n(This feature is still under development)`}
            className="form__control textarea"
          >
          </textarea>
        </div>

        <div className="button">
          Send Message
          <span className="button__icon contact__button-icon">
            <FiSend />
          </span>
        </div>
      </form>
      </div>
    </section>
  )
}
export default Contact