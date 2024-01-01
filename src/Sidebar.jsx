import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Sidebar.css';
import files from './images/files.svg';
import file from './images/file.svg';
import gitLogo from './images/github-inverted.svg';
import code from './images/code.svg';
import email from './images/mail.svg';
import account from './images/account.svg';
import settings from './images/settings-gear.svg';
import Collapsible from './Collapsible';
import reactLogo from './images/logo192.png';
import htmlLogo from './images/html.svg';
import cssLogo from './images/css.png';
import cppLogo from './images/ISO_C++_Logo.svg';
import javaLogo from './images/java.svg';
import cLogo from './images/c.svg';

const Sidebar = () => {
  const navigate = useNavigate();
  const handleNavigation = (link) => {
    // Check if the link is /git, and redirect to GitHub if true
    if (link === '/git') {
      window.location.href = 'https://github.com/VanshK123';
    } else {
      // For other links, use navigate as usual
      navigate(link);
    }
  };


  return (
    <div className='bigSidebar'>
      <div className="vscode-sidebar">
        <div className="sidebar-top">
          <button className="sidebar-btn" onClick={() => handleNavigation('/')}>
            <img src={files} alt="files" />
          </button>
          <button className="sidebar-btn" onClick={() => handleNavigation('/git')}>
            <img src={gitLogo} alt="git" />
          </button>
          <button className="sidebar-btn" onClick={() => handleNavigation('/projects')}>
            <img src={code} alt="code" />
          </button>
          <button className="sidebar-btn" onClick={() => handleNavigation('/contact')}>
            <img src={email} alt="email" />
          </button>
          <button className="sidebar-btn" onClick={() => handleNavigation('/resume')}>
            <img src={file} alt="Resume" />
          </button>
        </div>
        <div className="sidebar-bottom">
          <button className="sidebar-btn" onClick={() => handleNavigation('/contact')}>
            <img src={account} alt="account" />
          </button>
          <button className="sidebar-btn" onClick={() => handleNavigation('/')}>
            <img src={settings} alt="settings" />
          </button>
        </div>
      </div>
      
      <div className="sidebar-divider">
        <div className='sidebar-text-header'> Explorer </div>
        <Collapsible title="Portfolio">
          {[
            { icon: reactLogo, title: 'Home.jsx', link: '/' },
            { icon: htmlLogo, title: 'About.html', link: '/about' },
            { icon: cssLogo, title: 'Contact.css', link: '/contact' },
            { icon: cppLogo, title: 'Projects.cpp', link: '/projects' },
            { icon: javaLogo, title: 'Compiler.java', link: '/compiler' },
            { icon: cLogo, title: 'Resume.c', link: '/resume' },
          ].map((item, index) => (
            <button
              key={index}
              className="sidebar-text"
              onClick={() => handleNavigation(item.link)}
            >
              <img src={item.icon} alt={`${item.title} Logo`} className='logos' />
              {item.title}
            </button>
          ))}
        </Collapsible>
      </div>
    </div>
  );
};

export default Sidebar;
