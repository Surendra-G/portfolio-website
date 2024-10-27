import React from 'react';
import { saveAs } from 'file-saver';
import "./Resume.css";

function Resume() {
  const downloadResume = () => {
    saveAs(
      'https://drive.google.com/uc?export=download&id=1lZe-5Sk7HppgDJRibsR_4Z_f54Er5BYi',
      'Punam_Resume.pdf'
    );
  };

  return (
    <div>
      <h1> My Resume</h1>
      <button onClick={downloadResume}>Download Resume</button>
    </div>
  );
}

export default Resume;
