import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

const AdminDashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar for navigation */}
      <Sidebar />
      <div className="flex-1">
        {/* Navbar for quick actions */}
        <Navbar />
        {/* Dynamic content based on the selected route */}
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default AdminDashboard;