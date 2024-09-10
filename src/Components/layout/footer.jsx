// Footer.js
import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ links, text, className = '' }) => {
  return (
    <footer className={`footer ${className}`}>
      <div className="footer-content">
        <p>{text}</p>
        <ul className="footer-links">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href} target={link.newTab ? '_blank' : '_self'} rel="noopener noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired, // URL of the link
      label: PropTypes.string.isRequired, // Display text of the link
      newTab: PropTypes.bool             // Open link in a new tab
    })
  ).isRequired,
  text: PropTypes.string, // Footer text content
  className: PropTypes.string // Optional class for custom styling
};

export default Footer;
