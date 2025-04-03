import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Protection({ children }) {
  const userTokenString = localStorage.getItem("userToken"); // Retrieves string from localStorage
  const userToken = userTokenString ? JSON.parse(userTokenString) : null; // Parse the string to an object
  const accessToken = userToken?.user?.tokens?.accessToken;
  const isAuthenticated = !!accessToken; // Check if user is authenticated (token exists)
  const userRole = userToken?.user?.role;
  console.log("===========", userRole);
  const navigate = useNavigate();

  if (userRole === "Admin" && isAuthenticated) {
    navigate("/admindashboard");
  } else if (userRole === "user" && isAuthenticated) {
    navigate("/user-dashboard");
  } else {
    // If user is not authenticated, redirect to login page
    return <Navigate to="/login" replace />;
  }

  return children; // If authenticated, render the children (DashboardLayout content)
}

export default Protection;
