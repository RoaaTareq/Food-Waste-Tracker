import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import "../../assets/styles/components/Navbar.css";
import '../../assets/styles/global/global.css'
import { Link } from "react-router-dom";
import Switcherlang from '../layout/LanguageSwitcher'

const BurgerMenu = () => {
  const { t , i18n } = useTranslation();
  const mainrtl = i18n.language === 'ar';
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="burger-menu">
     <div className="d-flex justify-content-between">
     <Link to="/" onClick={closeMenu}>
      <h1>Food <sub>Limit</sub></h1>
      </Link>
      <button className="burger-menu-button" onClick={toggleMenu}>
        ☰ {/* You can use any icon or text for the burger menu button */}
      </button>
     </div>
      {isOpen && (
        <ul className="burger-menu-list">
          <li>  <Link to="/" onClick={closeMenu}>{t('home')}</Link></li>
          <li>  <Link to="/about" onClick={closeMenu}>{t('about')}</Link></li>
          <li>  <Link to="/contact" onClick={closeMenu}>{t('contact')}</Link></li>
          <li>  <Link to="/career" onClick={closeMenu}>{t('career')}</Link></li>
        <Switcherlang/>
        </ul>
      )}
    </div>
  );
};

export default BurgerMenu;
