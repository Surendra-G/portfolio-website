import React from "react";
import { Helmet } from "react-helmet";
import "./Portfolio.css";
import profileImage from "./images/profile.png";
import Punam from "./images/punamPP.jpeg";
import SocialMediaIcons from "./MediaButtons/media.jsx";
import Myskills from "./skills/skills.jsx";
import Myskills2 from "./skills/skills2.jsx";
import Footer from "./Footer/footer.jsx";
import Resume from "./Resume.jsx";
import Contact from "./Contact/contact.jsx";
import Navbar from "./navbar.jsx";

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@600&family=Montserrat:wght@600&family=Playfair+Display:wght@600&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Navbar />
      <main>
        <div className="Intro">
          <img className="punam" src={Punam} alt="Punam Shrestha" />
          <div className="Myintro">
            <p>
              "Hi, I'm Punam Shrestha, a bachelor student passionate about
              technology. I love learning about coding and new tech. I'm excited
              to connect with others, share ideas, and work on innovative
              projects in the tech world."
            </p>
            <Resume />
            <SocialMediaIcons />
            <Myskills />
            <Myskills2 />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Portfolio;
