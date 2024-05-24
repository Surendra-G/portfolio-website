import React from "react";
import './skills.css';
import Java from '../images/java.png';
import Python from '../images/python.png';
import Nodejs from '../images/nodejs.png';
import ReactIcon from '../images/structure.png';
import JavaScript from '../images/js.png';

const Myskills = () =>{
    return(
        <div className="container">
        <div data-text="React" style={{ "--r": "-15" }} className="glass">
          <svg
            viewBox="0 0 496 512"
            height="60px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <image href={ReactIcon} />
          </svg>
        </div>
        <div data-text="Python" style={{ "--r": "5" }} className="glass">
          <svg
            viewBox="0 0 640 512"
            height="60px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <image href={Python} />
          </svg>
        </div>
        <div data-text="Java" style={{ "--r": "25" }} className="glass">
          <svg
            viewBox="0 0 576 512"
            height="60px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <image href={Java} />
          </svg>
        </div>
        <div data-text="Node Js" style={{ "--r": "25" }} className="glass">
          <svg
            viewBox="0 0 496 512"
            height="60px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <image href={Nodejs} />
          </svg>
        </div>
    </div>
    );
};

export default Myskills;