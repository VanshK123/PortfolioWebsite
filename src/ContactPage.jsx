import React from 'react';
import './ContactPage.css'; // Import your CSS file for styling

const ContactPage = () => {
  return (
    <div className="vscode-container">
      <div className="vscode-header">
        <div className="vscode-titlebar">
          <div className="vscode-title">Contact Page</div>
        </div>
      </div>
      <div className="vscode-content">
        <div className="vscode-editor">
          <div className="editor-content">
            <div className="contact-details">
              <div className="contact-detail">
                <div className="detail-label">Email:</div>
                <div className="detail-value">khanna57@purdue.edu</div>
              </div>
              <div className="contact-detail">
                <div className="detail-label">Phone:</div>
                <div className="detail-value">+1 (765) 701 9288</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
