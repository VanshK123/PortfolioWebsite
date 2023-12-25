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
  { id: 1, title: 'home.jsx' },
  { id: 2, title: 'about.html' },
  { id: 3, title: 'contact.css' },
  { id: 4, title: 'projects.cpp'},
  { id: 5, title: 'compiler.java'},
  { id: 6, title: 'github.py'},
  { id: 7, title: 'resume.c'},
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
          {tab.title}
        </div>
      ))}
    </div>
  );
};

export default Taskbar;
