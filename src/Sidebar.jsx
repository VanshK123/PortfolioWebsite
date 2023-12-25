import React from 'react';
import './Sidebar.css';
import files from './images/files.svg';
import gitLogo from './images/github-inverted.svg';
import code from './images/code.svg';
import email from './images/mail.svg';
import account from './images/account.svg';
import settings from './images/settings-gear.svg';

const Sidebar = () => {
  return (
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
      <div className="sidebar-divider">
        <span className="sidebar-divider-text">Collapse</span>
      </div>
    </div>
    
  );
};

export default Sidebar;
