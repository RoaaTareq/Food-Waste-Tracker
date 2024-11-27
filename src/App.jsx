import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Views
import Login from './View/Auth/Login';
import Dashboard from './View/Dashboard/dashboard';
import Hospital from './View/Hosiptal/hosiptal'; // Fixing spelling
import Employee from './View/Employee/employee';

// Routes
import ProtectedRoute from '../src/Route/ProtectedRoute';

// Authentication Check
const checkAuth = () => {
  return localStorage.getItem('token') ? true : false;
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(checkAuth());

  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(checkAuth());
    };

    // Listen for changes in localStorage (such as logging out)
    window.addEventListener('storage', handleStorageChange);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Update authentication state after login
  const updateAuth = () => {
    setIsAuthenticated(checkAuth());
  };

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login updateAuth={updateAuth} />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard/*"
          element={<Dashboard/>} />
        
        <Route
          path="/hospital"
          element={<ProtectedRoute component={Hospital} allowedRoles={['hospital']} />}
        />
        <Route path="/employee/*" element={<Employee />} />
      </Routes>
    </Router>
  );
};

export default App;
