import React, { useState } from 'react';
import './Collapsible.css';
import chevronIcon from './images/chevron-right.svg';

const Collapsible = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapsible = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapsible">
      <div className="collapsible-header" onClick={toggleCollapsible}>
        <img
          className={`collapsible-icon ${isOpen ? 'open' : ''}`}
          src={chevronIcon}
          alt={isOpen ? 'open' : 'closed'}
        />
        {title}
      </div>
      {isOpen && <div className="collapsible-content">{children}</div>}
    </div>
  );
};

export default Collapsible;
