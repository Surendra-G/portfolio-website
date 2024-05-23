import React from "react";
import { Helmet } from "react-helmet";
import "./Portfolio.css";
import profileImage from "./images/profile.png";
import Surendra from "./images/surendra.png";
import Social from "./socialMedia/social.jsx";

const Portfolio = () => {
  return (
    <div>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@600&family=Montserrat:wght@600&family=Playfair+Display:wght@600&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <header>
        <nav>
          <div className="profileAlignment">
            <img
              className="profileIcon"
              src={profileImage}
              alt="Clickable Profile Icon"
            />
            <h2>Surendra Giri</h2>
          </div>
          <div className=" navitems">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
        {/* <div className="input__container">
            <div className="shadow__input"></div>
            <button className="input__button__shadow">
              <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="20px" width="20px">
                <path d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z" fillRule="evenodd" fill="#17202A"></path>
              </svg>
            </button>
            <input type="text" name="text" className="input__search" placeholder="What do you want to search about me?" />
          </div> */}
      </header> 
      <body>
        <h1>About Me</h1>
        <div className="Intro">
          <img
            className="Surendra"
            src={Surendra}
            alt="Surendra Giri's Photo"
          />
          <div className="Myintro">
            <p>
              "Hi, I'm Surendra Giri, a bachelor student deeply passionate about
              technology. With a fervent drive for learning, I eagerly explore
              coding and emerging tech. I'm excited to connect with fellow
              enthusiasts, exchange ideas, and collaborate on innovative
              projects that push the boundaries of what's possible in tech."
            </p>
            <Social />
          </div>
        </div>
      </body>
    </div>
  );
};

export default Portfolio;
