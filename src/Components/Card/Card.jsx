// Card.js
import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, image, description, children, className = '', onButtonClick }) => {
  return (
    <div className={`card  ratio-16x9 ${className}`}>
      {image && (
        <div className="card-image">
          <img src={image} alt={title} className='image-card' />
        </div>
      )}
      <div className="card-content">
        {title && <h3 className="card-title">{title}</h3>}
        {description && <p className="card-description">{description}</p>}
        {children}
      </div>
      {onButtonClick && (
        <button className="card-button" onClick={onButtonClick}>
          Learn More
        </button>
      )}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string, // Card title
  image: PropTypes.string, // Image source
  description: PropTypes.string, // Card description text
  children: PropTypes.node, // Additional elements like buttons, etc.
  className: PropTypes.string, // Optional custom class for styling
  onButtonClick: PropTypes.func, // Action when button is clicked
};

export default Card;
