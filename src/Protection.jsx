// import React from "react";
// import { Navigate, useNavigate } from "react-router-dom";

// function Protection({ children }) {
//   const userTokenString = localStorage.getItem("userToken"); // Retrieves string from localStorage
//   const userToken = userTokenString ? JSON.parse(userTokenString) : null; // Parse the string to an object
//   const accessToken = userToken?.user?.tokens?.accessToken;
//   const isAuthenticated = !!accessToken; // Check if user is authenticated (token exists)
//   const userRole = userToken?.user?.role;
//   console.log("===========", userRole);
//   const navigate = useNavigate();

//   if (userRole === "Admin" && isAuthenticated) {
//     navigate("/admindashboard");
//   } else if (userRole === "user" && isAuthenticated) {
//     navigate("/user-dashboard");
//   } else {
//     // If user is not authenticated, redirect to login page
//     return <Navigate to="/login" replace />;
//   }

//   return children; // If authenticated, render the children (DashboardLayout content)
// }

// export default Protection;
import React, { useEffect } from "react";
import { Navigate, useNavigate, useLocation } from "react-router-dom";

function Protection({ children }) {
  const userTokenString = localStorage.getItem("userToken");
  const userToken = userTokenString ? JSON.parse(userTokenString) : null;
  const accessToken = userToken?.user?.tokens?.accessToken;
  const isAuthenticated = !!accessToken;
  const userRole = userToken?.user?.role;

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated) return;

    if (userRole === "Admin" && !location.pathname.startsWith("/admindashboard")) {
      navigate("/admindashboard", { replace: true });
    } else if (userRole === "user" && !location.pathname.startsWith("/user-dashboard")) {
      navigate("/user-dashboard", { replace: true });
    }
  }, [isAuthenticated, userRole, navigate, location]);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default Protection;


