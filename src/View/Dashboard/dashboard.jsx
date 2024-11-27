import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SidebarDashboard from './Layout/Sidebar';
import Category from './Category';
import Hoispital from './Hoispital';
import ADDCategory from '../Dashboard/Models/CreateCategory'
import EditCategory  from '../Dashboard/Models/EditCategory'
import ADDHospital from '../Dashboard/Models/CreateHospital'
import EditHospital  from '../Dashboard/Models/EditHospital'
import Data from './Data'

function Dashboard() {
  return (
    <>
      <SidebarDashboard />
      <section className="home-section">
        <div className="container">
          {/* Routes for dashboard pages inside the home layout */}
          <Routes>
          
            <Route path="data" element={<Data />} />
            <Route path="/category" element={<Category />} />
            <Route path="/category/add-category" element={<ADDCategory />} />
            <Route path ="/category/edit-category" element={<EditCategory />} />
            <Route path ="/hospital/add-hospital" element={<ADDHospital />} />
            <Route path ="/hospital/edit-hospital" element={<EditHospital />} />
            <Route path="/hoispital" element={<Hoispital />} />
          </Routes>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
