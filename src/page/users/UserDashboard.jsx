import React from 'react'
import { Outlet } from "react-router-dom";
import UserSidebar from '../../components/UserSidebar'
import NavbarUser from '../../components/NavbarUser'

function UserDashboard() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar for navigation */}

      <div className="h-screen sticky top-0">
      <UserSidebar />
      </div>
     
      <div className="flex-1 flex flex-col h-screen">
      <div className="sticky top-0 z-10">
      <NavbarUser  />
       </div>
        
        {/* Dynamic content based on the selected route */}
        <div className="flex-1 overflow-y-auto">
        <div className="p-6">
          <Outlet />
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default UserDashboard