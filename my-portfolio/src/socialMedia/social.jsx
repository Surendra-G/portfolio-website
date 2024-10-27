import React from "react";
import "./social.css";
import Github from "../images/github.png";
import Linkedin from "../images/linkedin.png";
import Instagram from "../images/instagram.png";

const Githubbtn = () => {
  return;
};

const Social = () => {
  return (
    <div className="container">
      <a href="https://github.com/">
        <div data-text="Github" style={{ "--r": "-15" }} className="glass">
          <svg
            viewBox="0 0 496 512"
            height="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <image href={Github} />
          </svg>
        </div>
      </a>
      <a href="https://www.linkedin.com/">
        <div data-text="Linkedin" style={{ "--r": "5" }} className="glass">
          <svg
            viewBox="0 0 640 512"
            height="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <image href={Linkedin} />
          </svg>
        </div>
      </a>
      <a href="https://www.instagram.com/p00nam_stha?igsh=bmY1YWg2d3p2bHht">
        <div data-text="Instagram" style={{ "--r": "25" }} className="glass">
          <svg
            viewBox="0 0 576 512"
            height="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <image href={Instagram} />
          </svg>
        </div>
      </a>
    </div>
  );
};

export default Social;
