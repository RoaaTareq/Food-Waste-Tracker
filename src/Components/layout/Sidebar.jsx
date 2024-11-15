// Sidebar.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Offcanvas, Nav, Button } from 'react-bootstrap'; // Import required React Bootstrap components

const Sidebar = ({ links, logo, className = '', onLinkClick }) => {
  const [show, setShow] = useState(false); // State to toggle the sidebar visibility

  // Toggle the sidebar visibility
  const handleSidebarToggle = () => setShow(!show);

  // Handle clicking on a link
  const handleLinkClick = (link) => {
    if (onLinkClick) {
      onLinkClick(link); // Optional callback for custom behavior when a link is clicked
    }
    setShow(false); // Close the sidebar after a link is clicked
  };

  return (
    <>
      {/* Button to toggle sidebar */}
      <Button 
        className={`sidebar-toggle d-lg-none ${className}`} 
        onClick={handleSidebarToggle}
        aria-controls="offcanvasNavbar"
        aria-expanded={show}
      >
        <span className="burger-icon">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </Button>

      {/* Sidebar (Offcanvas) */}
      <Offcanvas show={show} onHide={handleSidebarToggle} placement="start" className="sidebar">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img src={logo} alt="Logo" className="sidebar-logo" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            {links.map((link, index) => (
              <Nav.Item key={index}>
                <Nav.Link 
                  href={link.href} 
                  onClick={() => handleLinkClick(link)}
                  target={link.newTab ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                >
                  {link.icon && <span className={`nav-icon ${link.icon}`}></span>}
                  {link.label}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

Sidebar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,  // URL of the link
      label: PropTypes.string.isRequired, // Display text of the link
      newTab: PropTypes.bool,             // Open link in a new tab
      icon: PropTypes.string,             // Icon class for the link (optional)
    })
  ).isRequired,
  logo: PropTypes.string.isRequired,   // Logo URL or image path
  className: PropTypes.string,         // Optional custom class for styling
  onLinkClick: PropTypes.func,          // Optional callback function when a link is clicked
};

export default Sidebar;
