import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Taskbar.css'; // Import your CSS file for styling
import reactLogo from './images/logo192.png';
import htmlLogo from './images/html.svg';
import cssLogo from './images/css.png';
import cppLogo from './images/ISO_C++_Logo.svg';
import javaLogo from './images/java.svg';
import pyLogo from './images/python-5.svg';
import cLogo from './images/c.svg';

const tabsData = [
  { id: 1, title: 'home.jsx', icon: reactLogo, link: '/' },
  { id: 2, title: 'about.html', icon: htmlLogo, link: '/about' },
  { id: 3, title: 'contact.css', icon: cssLogo, link: '/contact' },
  { id: 4, title: 'projects.cpp', icon: cppLogo, link: '/projects' },
  { id: 5, title: 'compiler.java', icon: javaLogo, link: '/compiler' },
  { id: 6, title: 'resume.c', icon: cLogo, link: '/resume' },
];

const Taskbar = () => {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleTabClick = (tabId, link) => {
    setActiveTab(tabId);
    navigate(link); // Use navigate to navigate to the specified link
  };

  return (
    <div className="vscode-taskbar">
      {tabsData.map((tab) => (
        <div
          key={tab.id}
          className={`taskbar-tab ${tab.id === activeTab ? 'active' : ''}`}
          onClick={() => handleTabClick(tab.id, tab.link)} // Pass the link to handleTabClick
        >
          <div className="tab-content">
            <img src={tab.icon} alt={`Icon for ${tab.title}`} className="tab-icon" />
            {tab.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Taskbar;
