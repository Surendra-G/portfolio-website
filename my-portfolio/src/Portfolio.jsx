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
        <h1>About Me</h1>
        <div className="Intro">
          <img
            className="Surendra"
            src={Surendra}
            alt="Surendra Giri's Photo"
          />
          <div className="Myintro">
            <p>
            "Hi, I'm Surendra Giri, a bachelor student passionate about technology. I love learning about coding and new tech. I'm excited to connect with others, share ideas, and work on innovative projects in the tech world."
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
