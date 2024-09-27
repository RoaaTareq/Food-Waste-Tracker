import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SidebarDashboard from './Layout/Sidebar';
import Hoispital from '../Hosiptal/pages/Partial/Hospital';
import Data from '../Dashboard/Data'

function HoispitalDashboard() {
  return (
    <>
      <SidebarDashboard />
      <section className="home-section">
        <div className="container">
          {/* Routes for dashboard pages inside the home layout */}
          <Routes>
            <Route path="/member" element={<Hoispital />} />
            <Route path="/data" element={<Data />} />
          </Routes>
        </div>
      </section>
    </>
  );
}

export default HoispitalDashboard;
