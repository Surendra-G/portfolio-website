import React from "react";
import { Helmet } from "react-helmet";
import "./Portfolio.css";
import profileImage from "./images/profile.png";
import Surendra from "./images/surendra.jpeg";
import Social from "./socialMedia/social.jsx";
import Myskills from "./skills/skills.jsx";
import Myskills2 from "./skills/skills2.jsx";
import SocialMediaIcons from "./MediaButtons/media.jsx";
import Footer from "./Footer/footer.jsx";

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
      </header>
      <body>
        <div className="Intro">
          <img
            className="Surendra"
            src={Surendra}
            alt="Surendra Giri's Photo"
          />
          {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#212121"
              d="M42.6,-42.7C50.5,-34.8,48.7,-17.4,46.3,-2.4C43.9,12.7,41,25.3,33.1,38.8C25.3,52.3,12.7,66.7,1.1,65.6C-10.5,64.5,-21,48,-37,34.5C-53,21,-74.5,10.5,-74.5,0C-74.4,-10.4,-52.8,-20.8,-36.8,-28.7C-20.8,-36.6,-10.4,-42,3.5,-45.5C17.4,-49,34.8,-50.6,42.6,-42.7Z"
              transform="translate(100 100)"
            />
          </svg> */}
          <div className="Myintro">
            <p>
              "Hi, I'm Surendra Giri, a bachelor student passionate about
              technology. I love learning about coding and new tech. I'm excited
              to connect with others, share ideas, and work on innovative
              projects in the tech world."
            </p>
            <SocialMediaIcons />
            <Myskills />
            <Myskills2 />
            <Footer />
          </div>
        </div>
      </body>
    </div>
  );
};

export default Portfolio;
