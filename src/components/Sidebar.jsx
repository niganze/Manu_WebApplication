import React from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  Heart,
  Users,
  BarChart,
  Settings,
  LogOut,
  Layers,
  CreditCard,
  Globe 
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-[#F0F2F5] text-gray-800 h-screen flex flex-col shadow-md">
      {/* Fixed Logo Section */}
      <div className="p-5 text-2xl font-bold text-[#A99FFF] sticky top-0 bg-[#F0F2F5] z-10">
        <Link to="/">
          Manu
        </Link>
      </div>

      {/* Scrollable Navigation Links */}
      <div className="flex-grow overflow-y-auto">
        <ul className="space-y-2 p-5">
          <li>
            <Link
              to="/admindashboard"
              className="flex items-center space-x-3 p-2 rounded-md hover:bg-blue-100 hover:border-l-4 hover:border-blue-500"
            >
              <LayoutDashboard size={20} className="text-[#A99FFF]" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="marketplace"
              className="flex items-center space-x-3 p-2 rounded-md hover:bg-blue-100 hover:border-l-4 hover:border-blue-500"
            >
              <Package size={20} className="text-[#A99FFF]" />
              <span>Marketplace</span>
            </Link>
          </li>
          <li>
            <Link
              to="subscription"
              className="flex items-center space-x-3 p-2 rounded-md hover:bg-blue-100 hover:border-l-4 hover:border-blue-500"
            >
              <CreditCard size={20} className="text-[#A99FFF]" />
              <span>Subscriptions</span>
            </Link>
          </li>
          <li>
            <Link
              to="users"
              className="flex items-center space-x-3 p-2 rounded-md hover:bg-blue-100 hover:border-l-4 hover:border-blue-500"
            >
              <Users size={20} className="text-[#A99FFF]" />
              <span>Users</span>
            </Link>
          </li>
          <li>
            <Link
              to="items"
              className="flex items-center space-x-3 p-2 rounded-md hover:bg-blue-100 hover:border-l-4 hover:border-blue-500"
            >
              <Layers size={20} className="text-[#A99FFF]" />
              <span>Projects</span>
            </Link>
          </li>
          <li>
            <Link
              to="charities"
              className="flex items-center space-x-3 p-2 rounded-md hover:bg-blue-100 hover:border-l-4 hover:border-blue-500"
            >
              <Globe  size={20} className="text-[#A99FFF]" />
              <span>All Charities</span>
            </Link>
          </li>
          <li>
            <Link
              to="donations"
              className="flex items-center space-x-3 p-2 rounded-md hover:bg-blue-100 hover:border-l-4 hover:border-blue-500"
            >
              <Heart size={20} className="text-[#A99FFF]" />
              <span>Donations</span>
            </Link>
          </li>
          <li>
            <Link
              to="blogsD"
              className="flex items-center space-x-3 p-2 rounded-md hover:bg-blue-100 hover:border-l-4 hover:border-blue-500"
            >
              <Layers size={20} className="text-[#A99FFF]" />
              <span>Blogs</span>
            </Link>
          </li>
          <li>
            <Link
              to="reports"
              className="flex items-center space-x-3 p-2 rounded-md hover:bg-blue-100 hover:border-l-4 hover:border-blue-500"
            >
              <BarChart size={20} className="text-[#A99FFF]" />
              <span>Reports</span>
            </Link>
          </li>
          <li>
            <Link
              to="settings"
              className="flex items-center space-x-3 p-2 rounded-md hover:bg-blue-100 hover:border-l-4 hover:border-blue-500"
            >
              <Settings size={20} className="text-[#A99FFF]" />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Fixed Logout Section */}
      <div className="p-5 sticky bottom-0 bg-[#F0F2F5]">
        <Link to="/landing">
          <button className="flex items-center space-x-3 p-2 text-gray-800 hover:text-red-500">
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;