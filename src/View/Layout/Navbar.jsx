// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';  // Optional: Use React Router for navigation
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';  // Import i18next hooks for language change

const NavigationBar = () => {
  const { i18n } = useTranslation();  // Destructure i18n to access changeLanguage function

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);  // Change language to the selected language
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Food Waste Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">{i18n.t('home')}</Nav.Link>
           
            {/* <NavDropdown title={i18n.t('more')} id="navbar-dropdown">
              <NavDropdown.Item as={Link} to="/contact">{i18n.t('contact')}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/help">{i18n.t('help')}</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          
          {/* Language Switcher (Dropdown or Button) */}
          <Button variant="outline-light" onClick={() => handleLanguageChange('en')}>EN</Button>
          <Button variant="outline-light" onClick={() => handleLanguageChange('ar')} className="ms-2">AR</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
