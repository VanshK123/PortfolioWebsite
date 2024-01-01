import React from 'react';
import Typed from 'react-typed';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleContactClick = () => {
    // Navigate to the contact page when the button is clicked
    navigate('/contact');
  };

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
        <p className='homePageText'>Software Developer, interested in high-performance systems</p>
        <p className='homePageText'>Checkout a fully working C compiler on the compiler page</p>
        <br />
        <button className='button' onClick={handleContactClick}>Contact Me</button>
      </div>
    </div>
  );
};

export default HomePage;
