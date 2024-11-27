import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SidebarDashboard from './Layout/Sidebar';
import Hoispital from '../Hosiptal/pages/Partial/Hospital';
import AddEmployee from './pages/Models/CreateEmployee'
import Data from './data'

function HoispitalDashboard() {
  return (
    <>
      <SidebarDashboard />
      <section className="home-section">
        <div className="container">
          {/* Routes for dashboard pages inside the home layout */}
          <Routes>
            <Route path="/member" element={<Hoispital />} />
            <Route path="/member/add-employee" element={<AddEmployee/>}></Route>
            <Route path="/data" element={<Data />} />
          </Routes>
        </div>
      </section>
    </>
  );
}

export default HoispitalDashboard;
