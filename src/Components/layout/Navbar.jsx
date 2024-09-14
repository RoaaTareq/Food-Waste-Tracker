// Navbar.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Navbar.css'; // Assuming you have styles for the navbar

const Navbar = ({ logo, links, className = '' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${className}`}>
      <div className="container">
        <div className="navbar-logo">
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
        </div>

        <button className="navbar-toggle" onClick={toggleMobileMenu}>
          {/* Burger icon */}
          <span className={`burger-icon ${isMobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        {/* Menu links */}
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
  logo: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      newTab: PropTypes.bool,
    })
  ).isRequired,
  className: PropTypes.string,
};

export default Navbar;
