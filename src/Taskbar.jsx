import React, { useState } from 'react';
import './Taskbar.css'; // Import your CSS file for styling
import reactLogo from './images/logo192.png';
import htmlLogo from './images/html.svg';
import cssLogo from './images/css.png';
import cppLogo from './images/ISO_C++_Logo.svg';
import javaLogo from './images/java.svg';
import pyLogo from './images/python-5.svg';
import cLogo from './images/c.svg';

const tabsData = [
  { id: 1, title: 'home.jsx', icon: reactLogo },
  { id: 2, title: 'about.html', icon: htmlLogo },
  { id: 3, title: 'contact.css', icon: cssLogo },
  { id: 4, title: 'projects.cpp', icon: cppLogo },
  { id: 5, title: 'compiler.java', icon: javaLogo },
  { id: 6, title: 'github.py', icon: pyLogo },
  { id: 7, title: 'resume.c', icon: cLogo },
];

const Taskbar = () => {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="vscode-taskbar">
      {tabsData.map((tab) => (
        <div
          key={tab.id}
          className={`taskbar-tab ${tab.id === activeTab ? 'active' : ''}`}
          onClick={() => handleTabClick(tab.id)}
        >
          <img src={tab.icon} alt={tab.title} className="tab-icon" />
          {tab.title}
        </div>
      ))}
    </div>
  );
};

export default Taskbar;
