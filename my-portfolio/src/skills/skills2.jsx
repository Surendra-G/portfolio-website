import React from "react";
import './newskills.css';
import Html from '../images/html-5.png';
import Css from '../images/css-3.png';
import JavaScript from '../images/js.png';
import MongoDB from '../images/mongodb.png';
import Database from '../images/database.png';

const Myskills2 = () =>{
    return(
        <div className="container2">
        <div data-text="HTML" style={{ "--r": "-15" }} className="glass">
          <svg
            viewBox="0 0 496 512"
            height="60px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <image href={Html} />
          </svg>
        </div>
        <div data-text="CSS" style={{ "--r": "5" }} className="glass">
          <svg
            viewBox="0 0 640 512"
            height="60px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <image href={Css}/>
          </svg>
        </div>
        <div data-text="JavaScript" style={{ "--r": "25" }} className="glass">
          <svg
            viewBox="0 0 576 512"
            height="60px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <image href={JavaScript} />
          </svg>
        </div>
        <div data-text="MangoDB" style={{ "--r": "25" }} className="glass">
          <svg
            viewBox="0 0 496 512"
            height="60px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <image href={MongoDB} />
          </svg>
        </div>
        <div data-text="MySQL" style={{ "--r": "25" }} className="glass">
          <svg
            viewBox="0 0 496 512"
            height="60px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <image href={Database} />
          </svg>
        </div>
    </div>
    );
};

export default Myskills2;