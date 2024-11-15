import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap'; // Import Form from React Bootstrap

const Input = ({ 
  type = 'text', 
  placeholder = '', 
  value, 
  onChange, 
  className = '', 
  disabled = false,
  name = '', 
  isValid = null,   // For Bootstrap form validation
  isInvalid = false // For Bootstrap form validation
}) => {
  return (
    <Form.Control
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`input ${className}`} // You can pass additional classes for custom styling
      disabled={disabled}
      name={name}
      isValid={isValid}   // Bootstrap validation state
      isInvalid={isInvalid} // Bootstrap validation state
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
  name: PropTypes.string,              // Input name
  isValid: PropTypes.bool,             // Bootstrap form validation - isValid
  isInvalid: PropTypes.bool            // Bootstrap form validation - isInvalid
};

export default Input;
