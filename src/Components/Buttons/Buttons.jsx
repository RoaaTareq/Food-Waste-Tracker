// Button.js
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, type = 'button', className = '', disabled = false }) => {
  return (
    <button
      type={type}
      className={`${className}`} // You can customize the className to support different styles
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,  // Content inside the button
  onClick: PropTypes.func,              // Function to handle button clicks
  type: PropTypes.oneOf(['button', 'submit', 'reset']), // Type of button
  className: PropTypes.string,          // Additional class for custom styling
  disabled: PropTypes.bool              // Disable button
};

export default Button;
