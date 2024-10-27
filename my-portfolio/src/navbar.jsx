import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom"; 
import "./Portfolio.css";
import profileImage from "./images/profile.png";

const Navbar = () => {
  return (
    <>
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
            <h2>Punam Shrestha</h2>
          </div>
          <div className="navitems">
            <a href="/">About</a>
            <Link to="/project">Projects</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
