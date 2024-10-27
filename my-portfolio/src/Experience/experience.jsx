import React from "react";
import "./experience.css";
import Navbar from "../navbar";
import sunway from "../images/sunway.png";
import esewa from "../images/esewa.png";
import google from "../images/google.jpg";

const Experience = () => {
  const Experiencelist = [
    {
      title: "Sunway College Kathmandu",
      description: "Working as a Full Stack Web Developer",
      technologies: ["HTML", "CSS", "PHP", "Python", "React"],
      demoLink: "https://sunway.edu.np/",
      image: sunway
    },
    {
      title: "Google",
      description: "Worked as a Full Stack Web Developer and side by side Data Analyst",
      technologies: ["Pyhton", "MySQL", "PostgreSQL"],
      demoLink: "#demolink2",
      image: google
    },  
    {
      title: "Esewa Nepal",
      description: "Worked as a Junior Frontend Developer for 1 year",
      technologies: ["React", "CSS", "JavaScript"],
      demoLink: "https://esewa.com.np/#/home",
      image: esewa 
    }
  ];

  return (
    <>
    <Navbar />
    <div className="projectsContainer">
      <h2>My Experience</h2><br />
      <div className="projectGrid">
        {Experiencelist.map((experience, index) => (
          <div className="projectCard" key={index}>
            <h3>{experience.title}</h3>
            <img src={experience.image} alt={`${experience.title} screenshot`} className="ExperienceImage" />
            <p>{experience.description}</p>
            <ul className="techList">
              {experience.technologies.map((tech, idx) => (
                <li key={idx}>{tech}</li>
              ))}
            </ul>
            <div className="projectLinks">
              <a href={experience.demoLink} target="_blank" rel="noopener noreferrer">
                Company Page
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Experience;
