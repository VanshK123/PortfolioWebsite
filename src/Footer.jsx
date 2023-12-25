import React from 'react';
import './Footer.css';
import bell from './images/bell.svg';
import error from './images/error.svg';
import warning from './images/warning.svg';
import source from './images/source-control.svg';

const Footer = () => {
  return (
    <div className="vscode-footer">
      <div className="footer-content">
        <div className="footer-right">
            <button className="footer-right-item"><img src = {source} alt = "sourceControl" className = "footer-right-item" />master</button>
            <button className = "footer-right-item"><img src = {error} alt = "error" className = "footer-right-item" /> 0 <img src = {warning} alt = 'warning' className = "footer-right-item" /> 0 </button>
        </div>
        <div className="footer-left">
            <button className="footer-left-item">Ln 1, Col 1</button>
            <button className="footer-left-item">Spaces: 4</button>
            <button className="footer-left-item">UTF-8</button>
            <button className="footer-left-item">CRLF</button>
            <button className="footer-left-item">JavaScript</button>
            <button className="footer-left-item"><img src = {bell} alt="bell" className="footer-left-item" /></button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
