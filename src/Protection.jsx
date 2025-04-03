import React from "react";
import { Navigate } from "react-router-dom";

function Protection({ children }) {
  const userToken = localStorage.getItem("userToken"); // Retrieve token from localStorage
  const accessToken = userToken?.user?.tokens?.accessToken; 
  const isAuthenticated = !!accessToken; // Check if user is authenticated (token exists)

  if (!isAuthenticated) {
    // If user is not authenticated, redirect to login page
    return <Navigate to="/login" replace />;
  }

  return children; // If authenticated, render the children (DashboardLayout content)
}

export default Protection;
