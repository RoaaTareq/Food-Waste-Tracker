import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SidebarDashboard from './Layout/Sidebar';
import Admin from './Admin';
import Category from './Category';
import Hoispital from './Hoispital';
import Data from './Data'

function Dashboard() {
  return (
    <>
      <SidebarDashboard />
      <section className="home-section">
        <div className="container">
          {/* Routes for dashboard pages inside the home layout */}
          <Routes>
            <Route path="/" element={<Admin />} />
            <Route path='/data' element={<Data />} />
            <Route path="/category" element={<Category />} />
            <Route path="/hoispital" element={<Hoispital />} />
          </Routes>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
