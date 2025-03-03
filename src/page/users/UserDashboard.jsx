import React from 'react'
import { Outlet } from "react-router-dom";
import UserSidebar from '../../components/UserSidebar'
import NavbarUser from '../../components/NavbarUser'

function UserDashboard() {
  return (
    <div className="flex">
      {/* Sidebar for navigation */}
      <UserSidebar />
      <div className="flex-1">
        {/* Navbar for quick actions */}
        <NavbarUser />
        {/* Dynamic content based on the selected route */}
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default UserDashboard