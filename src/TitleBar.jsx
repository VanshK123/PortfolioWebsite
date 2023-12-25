import React from 'react';
import './TitleBar.css';
import logo from './images/vscode.png';

const TitleBar = () => {
  return (
    <div className="title-bar">
        <img src={logo} alt="logo" className="logo" />
        <div className="title-bar-btns-left">
            <button className="title-bar-btns-left-btn" id="file-btn">File</button>
            <button className="title-bar-btns-left-btn" id="edit-btn">Edit</button>
            <button className="title-bar-btns-left-btn" id="selection-btn">Selection</button>
            <button className="title-bar-btns-left-btn" id="view-btn">View</button>
            <button className="title-bar-btns-left-btn" id="go-btn">Go</button>
            <button className="title-bar-btns-left-btn" id="run-btn">Run</button>
            <button className="title-bar-btns-left-btn" id="terminal-btn">Terminal</button>
            <button className="title-bar-btns-left-btn" id="help-btn">Help</button>
        </div>
        <div className="title-bar-text">Vansh Khanna - Portfolio</div>
        <div className="title-bar-controls">
            <button className="title-bar-btn" id="minimize-btn"></button>
            <button className="title-bar-btn" id="maximize-btn"></button>
            <button className="title-bar-btn" id="close-btn"></button>
        </div>
    </div>
  );
};

export default TitleBar;
