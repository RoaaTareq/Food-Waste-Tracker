import React from 'react';
import PropTypes from 'prop-types';
import { Button as BootstrapButton } from 'react-bootstrap'; // Import Bootstrap Button

const Button = ({ children, onClick, type = 'button', className = '', disabled = false, variant = 'primary' }) => {
  return (
    <BootstrapButton
      type={type}
      className={className} // Use additional classes if necessary
      onClick={onClick}
      disabled={disabled}
      variant={variant} // Bootstrap button variant (e.g., primary, secondary, danger, etc.)
    >
      {children}
    </BootstrapButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,  // Content inside the button
  onClick: PropTypes.func,              // Function to handle button clicks
  type: PropTypes.oneOf(['button', 'submit', 'reset']), // Type of button
  className: PropTypes.string,          // Additional class for custom styling
  disabled: PropTypes.bool,             // Disable button
  variant: PropTypes.string,            // Button variant (primary, secondary, etc.)
};

export default Button;
