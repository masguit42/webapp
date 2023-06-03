import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = ({ options, onSelect, themeParams }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  const dropdownStyles = {
    backgroundColor: themeParams.secondary_bg_color,
    color: themeParams.text_color,
    borderBottomColor: themeParams.secondary_bg_color
  };

  const optionStyles = {
    color: themeParams.text_color,
    backgroundColor: themeParams.bg_color
  };

  const arrowStyles = {
    color: themeParams.link_color
  };

  let dropdown_bg_color = "#f9f9f9";
  let dropdown_text_color = "#000000";
  
  return (
    <div className="dropdown" style={dropdownStyles}>
      <div
        className={`dropdown-header ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption ? (
          selectedOption.label
        ) : (
          <span className="placeholder">Select an option</span>
        )}
        <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`} style={arrowStyles}>
          &#9662;
        </span>
      </div>
      {isOpen && (
        <ul className="dropdown-options">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleOptionClick(option)}
              style={optionStyles}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
