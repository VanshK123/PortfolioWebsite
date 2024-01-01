import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="vscode-container">
      <h1>Reach Out</h1>
      <div className='content'>
        <div style={{ color: '#007acc' }}>.socials <span style={{ color: 'white' }}>{"{"}</span></div>
        
          <div style={{ color: 'white' , marginLeft:50}}>email{":"} <a href='mailto:khanna57@purdue.edu' style={{ color: '#007acc' }} target='_blank' rel='noopener' className='links'>khanna57@purdue.edu</a>{";"}</div>
          <div style={{ color: 'white', marginLeft:50 }}>phone{":"} <span style={{ color: '#007acc' }}>+1 765-701-9288</span>{";"}</div>
          <div style={{ color: 'white', marginLeft:50 }}>linkedin{":"} <a href='https://www.linkedin.com/in/vansh-khanna-7026741b3/' style={{ color: '#007acc' }} target='_blank' rel='noopener'className='links'>vanshkhanna</a>{";"}</div>
          <div style={{ color: 'white' , marginLeft:50}}>github{":"} <a href='https://github.com/VanshK123' style={{ color: '#007acc' }} target='_blank' rel='noopener' className='links'>VanshK123</a>{";"}</div>
      
        <div>{"}"}</div>
      </div>
    </div>
  );
};

export default ContactPage;
