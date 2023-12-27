import React from 'react';
import Typed from 'react-typed';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="home-background"></div>
      <div className="home-content">
        <h1 className='homePageH1'>Vansh Khanna</h1>
        <Typed
          strings={['Software Developer', 'Problem Solver', 'OS and Compilers Enthusiast', 'Computer Engineer']}
          typeSpeed={60}
          backSpeed={30}
          backDelay={1000}
          showCursor
          cursorChar="|"
          loop
          className="typed-text"
        />
        <br />
        <p className='homePageText'>Software Developer, interested in high performance systems</p>
        <br />
        <button className='button'>Contact Me</button>
      </div>
    </div>
  );
};

export default HomePage;
