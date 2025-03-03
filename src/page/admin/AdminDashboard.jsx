import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

const AdminDashboard = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar for navigation - fixed */}
      <div className="h-screen sticky top-0">
        <Sidebar />
      </div>
      
      {/* Main content area */}
      <div className="flex-1 flex flex-col h-screen">
        {/* Navbar - fixed at the top */}
        <div className="sticky top-0 z-10">
          <Navbar />
        </div>
        
        {/* Scrollable content area for Outlet */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;