import React from 'react';
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ loggedIn, component }) => {
 return   loggedIn ? component : <Navigate to="/signin" />;
}

export default ProtectedRoute;