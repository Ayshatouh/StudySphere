import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'

const ProtectedRoute = ({ allowaedRoles, children}) => {
    const {user} =useAuth();

    if (!user) {
        return<Navigate to="/" replace/>;  
      }
    if (!allowaedRoles.includes(user.role)){
        <Navigate to="/dashboard" replace/>;
    }
  return children;
};

export default ProtectedRoute