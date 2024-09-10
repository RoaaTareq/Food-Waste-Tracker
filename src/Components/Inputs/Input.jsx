// Input.js
import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ 
  type = 'text', 
  placeholder = '', 
  value, 
  onChange, 
  className = '', 
  disabled = false,
  name = ''
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`input ${className}`} // You can pass additional classes for custom styling
      disabled={disabled}
      name={name}
    />
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'password', 'email', 'number', 'tel', 'url']), // Support for different input types
  placeholder: PropTypes.string,       // Placeholder text
  value: PropTypes.string.isRequired,  // Controlled input value
  onChange: PropTypes.func.isRequired, // Function to handle input changes
  className: PropTypes.string,         // Additional class for custom styling
  disabled: PropTypes.bool,            // Disable input field
  name: PropTypes.string               // Input name
};

export default Input;
