import React, { useState } from 'react';
import SidebarDashboard from './Layout/Sidebar';
// import Admin from '../../Dashboard/Pages/Admin';
import Category from './Category';

function Home() {
 
  return (
    <>
      <SidebarDashboard  />
      <section className="home-section">
        <div className="container">
        <Category/>
        </div>
      </section>
    </>
  );
}

export default Home;
