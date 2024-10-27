import React from "react";
import "./blog.css";
import Navbar from "../navbar";
import news2 from "../images/news2.jpeg";
import start from "../images/start.jpg";
import trends from "../images/trends.webp";

const Blog = () => {
  const bloglist = [
    {
      title: "Building Your First Full-Stack App: Where to Start?",
      description: "This blog could walk readers through creating a basic full-stack app, covering frontend, backend, and database essentials. You could share tips, tech stacks, common challenges, and solutions. This could attract both beginners looking to start in web development and experienced developers interested in refining their skills.",
      technologies: ["React", "Django", "WebRTC", "Socket.IO", "PostgreSQL"],
      demoLink: "#demolink1",
      codeLink: "https://github.com/your-username/news-broadcasting-website",
      image: start
    },
    {
      title: "Top 5 Web Dev Trends for 2024 You Can't Ignore",
      description: "Focus on recent developments in web technologies, such as AI integration in web design, WebAssembly, serverless computing, Progressive Web Apps (PWAs), or the rise of Web3. Highlighting these trends can give readers insights into where the industry is heading and how they can stay ahead.",
      technologies: ["Java", "MySQL"],
      demoLink: "#demolink2",
      codeLink: "https://github.com/your-username/hotel-reservation-system",
      image: trends
    },
    {
      title: "Creating a Live News Platform with React and Django",
      description: "Since you’re working on a news broadcasting project, you could break down the project step-by-step. This post could cover how to set up WebRTC for live streaming, manage real-time chat with Socket.IO, and integrate a backend like Django. It would appeal to readers interested in practical, project-based learning and media streaming technology.",
      technologies: ["React", "CSS", "JavaScript"],
      demoLink: "#demolink3",
      codeLink: "https://github.com/your-username/portfolio-website",
      image: news2 
    }
  ];

  return (
    <>
    <Navbar />
    <div className="projectsContainer">
      <h2>My Blogs</h2>
      <div className="projectGrid">
        {bloglist.map((blog, index) => (
          <div className="projectCard" key={index}>
            <h3>{blog.title}</h3>
            <img src={blog.image} alt={`${blog.title} screenshot`} className="projectImage" />
            <p>{blog.description}</p>
            <div className="projectLinks">
              <a href={blog.demoLink} target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Blog;
