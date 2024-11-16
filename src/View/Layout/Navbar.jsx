import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';  // Use useNavigate instead of useHistory
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';  // Import i18next hooks for language change

const NavigationBar = () => {
  const { i18n } = useTranslation();  // Destructure i18n to access changeLanguage function
  const location = useLocation();  // Access the current location object to check the URL query params
  const navigate = useNavigate();  // useNavigate hook for programmatic navigation

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);  // Change language
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    
    // Store language in localStorage
    localStorage.setItem('lang', lang);
    
    // Update the URL with the new query parameter
    const currentPath = window.location.pathname;
    navigate(`${currentPath}?lang=${lang}`);
  };
  

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Food Waste Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">{i18n.t('home')}</Nav.Link>
          </Nav>
          
          {/* Language Switcher (Buttons) */}
          <Button variant="outline-light" onClick={() => handleLanguageChange('en')}>EN</Button>
          <Button variant="outline-light" onClick={() => handleLanguageChange('ar')} className="ms-2">AR</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
