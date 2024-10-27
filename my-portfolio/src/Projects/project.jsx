import React from "react";
import "./project.css";
import Navbar from "../navbar";
import news from "../images/news.jpg";
import portfo from "../images/portfo.png";
import hotel from "../images/hotel.jpg";

const Projects = () => {
  const projectList = [
    {
      title: "News Broadcasting Website",
      description: "A live news streaming platform with integrated chat and WebRTC broadcasting.",
      technologies: ["React", "Django", "WebRTC", "Socket.IO", "PostgreSQL"],
      demoLink: "#demolink1",
      codeLink: "https://github.com/your-username/news-broadcasting-website",
      image: news
    },
    {
      title: "Flight Management System",
      description: "A Flight Management System with an interactive frontend and a secure backend.",
      technologies: ["Java", "MySQL"],
      demoLink: "#demolink2",
      codeLink: "https://github.com/your-username/hotel-reservation-system",
      image: hotel
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio showcasing projects, skills, and experience.",
      technologies: ["React", "CSS", "JavaScript"],
      demoLink: "#demolink3",
      codeLink: "https://github.com/your-username/portfolio-website",
      image: portfo 
    }
  ];

  return (
    <>
    <Navbar />
    <div className="projectsContainer">
      <h2>My Projects</h2>
      <div className="projectGrid">
        {projectList.map((project, index) => (
          <div className="projectCard" key={index}>
            <h3>{project.title}</h3>
            <img src={project.image} alt={`${project.title} screenshot`} className="projectImage" />
            <p>{project.description}</p>
            <ul className="techList">
              {project.technologies.map((tech, idx) => (
                <li key={idx}>{tech}</li>
              ))}
            </ul>
            <div className="projectLinks">
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                Demo
              </a>
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Projects;
