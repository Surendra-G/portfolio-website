import React, { useEffect, useState } from 'react';
import './App.css'; 
import Portfolio from './Portfolio';
import LoadingIcon from './loading/loading.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Contact/contact";
import Projects from './Projects/project.jsx';
import Experience from './Experience/experience.jsx';
import Blog from './Blog/blog.jsx';

function App() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds for loading

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="App">
        <LoadingIcon />
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
