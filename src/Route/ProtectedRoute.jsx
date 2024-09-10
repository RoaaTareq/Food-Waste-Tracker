import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, allowedRoles, ...rest }) => {
  const user = JSON.parse(localStorage.getItem('user')); // Get the user from localStorage

  return (
    <Route
      {...rest}
      element={
        user && allowedRoles.includes(user.role) ? (
          <Component />
        ) : (
          <Navigate to="/login" /> // Use Navigate instead of Redirect
        )
      }
    />
  );
};

export default ProtectedRoute;
