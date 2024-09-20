import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, allowedRoles }) => {
  const user = JSON.parse(localStorage.getItem('user')); // Get the user from localStorage

  // Check if the user exists and has one of the allowed roles
  if (user && allowedRoles.includes(user.role)) {
    return <Component />; // Render the component if the user is authorized
  } else {
    return <Navigate to="/login" />; // Redirect to login if unauthorized
  }
};

export default ProtectedRoute;
