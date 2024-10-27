import React, { useState } from "react";
import "./contact.css";
import Navbar from "../navbar";
import Footer from "../Footer/footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Form Data Submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <div className="contactContainer">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit} className="contactForm">
          <div className="formGroup">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
        <div className="contactInfo">
          <h3>Contact Information</h3>
          <p>Email: punam@gamil.com</p>
          <p>Phone: +977 9848051314</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
