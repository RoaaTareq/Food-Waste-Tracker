import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SidebarDashboard from './Layout/Sidebar';
import Employee from '../Employee/Partial/tes';
import Data from '../Dashboard/Data'

function EmployeeDashboard() {
  return (
    <>
      <SidebarDashboard />
      <section className="home-section">
        <div className="container">
          {/* Routes for dashboard pages inside the home layout */}
          <Routes>
            <Route path="employee" element={<Employee />} />
            <Route path="data" element={<Data />} />
          </Routes>
        </div>
      </section>
    </>
  );
}

export default EmployeeDashboard;
