

import React from 'react';
import Nav from '../../Components/Layout/Navbar'

const Navbar = () => {
  const links = [
    { href: '/', label: 'Home', newTab: false },
    { href: '/login', label: 'Login', newTab: false }
  ];

  return (
    <div>
      <Nav  links={links} className="custom-navbar" />
      {/* Other components */}
    </div>
  );
};

export default Navbar;
