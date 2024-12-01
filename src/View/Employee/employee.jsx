import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SidebarDashboard from './Layout/Sidebar';
import Employee from './Partial/Header';  // Employee component
import Data from './Data';  // Data component
import CreateFood from '../Employee/Partial/CreateFood'
import EditFood from '../Employee/Partial/EditFood'
function EmployeeDashboard() {
  return (
    <>
      <SidebarDashboard />
      <section className="home-section">
        <div className="container">
         
          <Routes>
           
            <Route path="employee" element={<Employee />} />
            <Route path="/data" element={<Data />} />
            <Route path="/create-food" element={<CreateFood />} />
            <Route path="/edit-food" element={<EditFood />} />
          </Routes>
        </div>
      </section>
    </>
  );
}

export default EmployeeDashboard;
