import React from 'react';
import Typed from 'react-typed';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Vansh Khanna</h1>
        <Typed
          strings={['Software Developer', 'Problem Solver', 'OS and Compilers Enthusiast', 'Computer Engineer']}
          typeSpeed={60}
          backSpeed={30}
          backDelay={1000}
          showCursor
          cursorChar="|"
          className="typed-text"
        />
        <p>Welcome to my portfolio website. I am a senior in computer engineering at Purdue University and I love building new things.</p>
        <button>Contact Me</button>
      </div>
    </div>
  );
};

export default HomePage;
