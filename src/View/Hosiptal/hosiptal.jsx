import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SidebarDashboard from './Layout/Sidebar';
import Hoispital from '../Hosiptal/pages/Partial/Hospital';

function HoispitalDashboard() {
  return (
    <>
      <SidebarDashboard />
      <section className="home-section">
        <div className="container">
          {/* Routes for dashboard pages inside the home layout */}
          <Routes>
            <Route path="/employee" element={<Hoispital />} />
          </Routes>
        </div>
      </section>
    </>
  );
}

export default HoispitalDashboard;
