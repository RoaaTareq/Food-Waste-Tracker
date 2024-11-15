import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Nav } from 'react-bootstrap'; // Import React Bootstrap components

const Footer = ({ links, text, className = '' }) => {
  return (
    <footer className={`footer ${className}`}>
      <Container>
        <Row>
          {/* Footer text */}
          <Col md={6} className="footer-text">
            <p>{text}</p>
          </Col>

          {/* Footer links */}
          <Col md={6} className="footer-links">
            <Nav>
              {links.map((link, index) => (
                <Nav.Item key={index}>
                  <Nav.Link 
                    href={link.href} 
                    target={link.newTab ? '_blank' : '_self'} 
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
        </Row>
      </Container>
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
