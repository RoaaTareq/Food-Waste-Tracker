import React, { useState } from 'react';
import SidebarDashboard from './Layout/Sidebar';
import Admin from '../../Dashboard/Pages/Admin';
import Category from './Category/Category';

function Home() {
  const [view, setView] = useState('Admin'); // default to 'Admin'

  const renderContent = () => {
    switch (view) {
      case 'Admin':
        return <Admin />;
      case 'Category':
        return <Category />;
      case 'Hospital':
        // Replace with the Hospital component if needed
        return <div>Hospital Component</div>;
      default:
        return <Admin />;
    }
  };

  return (
    <>
      <SidebarDashboard onSelectView={setView} />
      <section className="home-section">
        <div className="container">
          {renderContent()}
        </div>
      </section>
    </>
  );
}

export default Home;
