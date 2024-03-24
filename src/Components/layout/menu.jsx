import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import "../../assets/styles/components/Navbar.css";
import '../../assets/styles/global/global.css'
import { Link } from "react-router-dom";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger-menu">
     <div className="d-flex justify-content-between">
     <Link to="/">
      <h1>Food <sub>Limit</sub></h1>
      </Link>
      <button className="burger-menu-button" onClick={toggleMenu}>
        ☰ {/* You can use any icon or text for the burger menu button */}
      </button>
     </div>
      {isOpen && (
        <ul className="burger-menu-list">
          <li><a href="#">Home</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Career</a></li>
          {/* Add more menu items as needed */}
        </ul>
      )}
    </div>
  );
};

export default BurgerMenu;
