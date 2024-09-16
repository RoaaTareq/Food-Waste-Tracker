import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './View/Home/Home';
import Login from './View/Auth/Login';
import Navbar from './View/Layout/Navbar';
import Dashboard from './View/Dashboard/dashboard'; // Assuming you have a Dashboard component
import Hoispital from './View/Hosiptal/hosiptal';
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
        {/* <Route path="/dashboard/*" element={<Dashboard />} /> */}
        <Route path ="/hoispital/*"  element={<Hoispital/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
