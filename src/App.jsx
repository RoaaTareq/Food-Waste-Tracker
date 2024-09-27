import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './View/Home/Home';
import Navbar from './View/Layout/Navbar';
import Login from './View/Auth/Login';
import Dashboard from './View/Dashboard/dashboard';
import Hoispital from './View/Hosiptal/hosiptal';
import Employee from './View/Employee/employee'
import ProtectedRoute from '../src/Route/ProtectedRoute'; // Import the ProtectedRoute component

// Function to check authentication
const checkAuth = () => {
  const token = localStorage.getItem('token');
  return token ? true : false;
};

const App = () => {
  // State to track authentication status (no need to specify 'boolean')
  const [isAuthenticated, setIsAuthenticated] = useState(checkAuth());

  // Listen for changes to localStorage (i.e., login/logout events)
  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(checkAuth());
    };

    // Add an event listener for storage changes
    window.addEventListener('storage', handleStorageChange);

    // Clean up the event listener
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Function to update authentication state after login
  const updateAuth = () => {
    setIsAuthenticated(checkAuth());
  };

  return (
    <Router>
      {/* Conditionally render Navbar based on authentication */}
      {!isAuthenticated && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login updateAuth={updateAuth} />} />

        {/* Admin Protected Route */}
        <Route 
          path="/dashboard/*" 
          element={<ProtectedRoute component={Dashboard} allowedRoles={['admin']} />} 
        />

        {/* Hospital Owner Protected Route */}
        <Route 
          path="/hoispital/*" 
          element={<ProtectedRoute component={Hoispital} allowedRoles={['hospital']} />} 
        />
 <Route 
          path="/employee/*" 
          element={<ProtectedRoute component={Employee} allowedRoles={['employee']} />} 
        />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
