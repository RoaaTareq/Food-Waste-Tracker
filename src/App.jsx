import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './View/Home/Home';
import Login from './View/Auth/Login';
import Navbar from './View/Layout/Navbar';
import Dashboard from './View/Dashboard/dashboard'; // Assuming you have a Dashboard component

function App() {
  // Check for token in localStorage or sessionStorage
  const token = localStorage.getItem('token'); // Replace 'token' with your actual token key

  return (
    <Router>
      {/* Conditionally render Navbar only if no token exists */}
      {!token && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
