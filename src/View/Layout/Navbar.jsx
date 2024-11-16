import React from 'react';
import CustomNavbar from '../../Components/Layout/Navbar';  

const Navbar = () => {
  const links = [
    { href: '/', label: 'Home', newTab: false },
    { href: '/login', label: 'Login', newTab: false }
  ];

  return (
    <div>
      <CustomNavbar links={links} className="custom-navbar" />
    </div>
  );
};

export default Navbar;
