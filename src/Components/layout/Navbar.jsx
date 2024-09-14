// Navbar.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';


const Navbar = ({ logo, links, className = '' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${className}`}>
    <div className="container">
    <div className="navbar-logo ">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
      </div>
{/* 
      <button className="navbar-toggle" onClick={toggleMobileMenu}>
        ☰
      </button> */}

      <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} target={link.newTab ? '_blank' : '_self'} rel="noopener noreferrer">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
    </nav>
  );
};

Navbar.propTypes = {
  logo: PropTypes.string.isRequired, // Logo image source
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired, // URL for navigation link
      label: PropTypes.string.isRequired, // Label for the link
      newTab: PropTypes.bool             // Open link in a new tab or not
    })
  ).isRequired,
  className: PropTypes.string // Optional class for additional styling
};

export default Navbar;
