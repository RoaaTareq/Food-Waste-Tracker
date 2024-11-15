import React from 'react';
import PropTypes from 'prop-types';
import { Card as BootstrapCard, Button } from 'react-bootstrap'; // Import Bootstrap Card and Button

const CustomCard = ({ title, image, description, children, className = '', onButtonClick }) => {
  return (
    <BootstrapCard className={`custom-card ${className}`} style={{ width: '18rem' }}>
      {image && (
        <BootstrapCard.Img variant="top" src={image} alt={title} className="image-card" />
      )}
      <BootstrapCard.Body>
        {title && <BootstrapCard.Title>{title}</BootstrapCard.Title>}
        {description && <BootstrapCard.Text>{description}</BootstrapCard.Text>}
        {children}
        {onButtonClick && (
          <Button variant="primary" onClick={onButtonClick}>
            Learn More
          </Button>
        )}
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

CustomCard.propTypes = {
  title: PropTypes.string,      // Card title
  image: PropTypes.string,      // Image source
  description: PropTypes.string, // Card description text
  children: PropTypes.node,     // Additional elements like buttons, etc.
  className: PropTypes.string,  // Optional custom class for styling
  onButtonClick: PropTypes.func, // Action when button is clicked
};

export default CustomCard;
