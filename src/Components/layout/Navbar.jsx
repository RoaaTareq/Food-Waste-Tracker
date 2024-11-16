import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavDropdown, Button, Collapse, Container } from 'react-bootstrap'; // Import React Bootstrap components

const CustomNavbar = ({ logo, links, className = '' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Navbar expand="lg" className={`navbar ${className}`}>
      <Container>
        {/* Logo */}
        {/* <Navbar.Brand href="/">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Navbar.Brand> */}

        
        <Button
          className="navbar-toggle d-lg-none"
          onClick={toggleMobileMenu}
          aria-controls="navbar-nav"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`burger-icon ${isMobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </Button>

        {/* Navbar links and collapse for mobile */}
        <Collapse in={isMobileMenuOpen}>
          <Nav className="ml-auto" id="navbar-nav">
            {links.map((link, index) => (
              <Nav.Item key={index}>
                {link.newTab ? (
                  <Nav.Link href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </Nav.Link>
                ) : (
                  <Nav.Link href={link.href} rel="noopener noreferrer">
                    {link.label}
                  </Nav.Link>
                )}
              </Nav.Item>
            ))}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

CustomNavbar.propTypes = {
  logo: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired, // URL of the link
      label: PropTypes.string.isRequired, // Display text of the link
      newTab: PropTypes.bool,            // Open link in a new tab
    })
  ).isRequired,
  className: PropTypes.string, // Optional class for custom styling
};

export default CustomNavbar;
