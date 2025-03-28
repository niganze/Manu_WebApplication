import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  let userToken = JSON.parse(localStorage.getItem("userToken"));
  const userRole = userToken?.user?.role;
  const Token = userToken?.tokens?.accessToken;
  const location = useLocation();

  // Redirect to login if no access token exists
  if (!Token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Check if the user role is allowed to access the page
  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
