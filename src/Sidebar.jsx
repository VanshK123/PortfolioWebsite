import React from 'react';
import './Sidebar.css';
import files from './images/files.svg';
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
import pyLogo from './images/python-5.svg';

const Sidebar = () => {
  return (
    <div className='bigSidebar'>
      <div className="vscode-sidebar">
        <div className="sidebar-top">
          <button className="sidebar-btn">
              <img src={files} alt="files" />
          </button>
          <button className="sidebar-btn">
              <img src={gitLogo} alt="git" />
          </button>
          <button className="sidebar-btn">
              <img src={code} alt="code" />
          </button>
          <button className="sidebar-btn">
              <img src={email} alt="email" />
          </button>
        </div>
        <div className="sidebar-bottom">
          <button className="sidebar-btn">
              <img src={account} alt="account" />
          </button>
          <button className="sidebar-btn">
              <img src={settings} alt="settings" />
          </button>
        </div>
      </div>
      
      <div className="sidebar-divider">
        <div className='sidebar-text-header'> Explorer </div>
        <Collapsible title="Portfolio">
          <button className="sidebar-text"><img src = {reactLogo} alt='React Logo' className='logos'/>Home.jsx</button>
          <button className="sidebar-text"><img src = {htmlLogo} alt='HTML Logo' className='logos'/>About.html</button>
          <button className="sidebar-text"><img src = {cssLogo} alt='CSS Logo' className='logos'/>Contact.css</button>
          <button className="sidebar-text"><img src = {cppLogo} alt='C++ Logo' className='logos'/>Projects.cpp</button>
          <button className="sidebar-text"><img src = {javaLogo} alt='Java Logo' className='logos'/>Compiler.java</button>
          <button className="sidebar-text"><img src = {pyLogo} alt='Python Logo' className='logos'/>GitHub.py</button>
        </Collapsible>
      </div>

    </div>
    
  );
};

export default Sidebar;
