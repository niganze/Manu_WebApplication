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
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-[#F0F2F5] text-gray-800 h-full shadow-md">
      {/* Logo */}
      <div className="p-5 text-2xl font-bold text-[#A99FFF] cursor-pointer">
        Manu WebApp
      </div>

      {/* Navigation Links */}
      <ul className="space-y-2 p-5">
        <li>
          <Link
            to=""
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
            to="donations"
            className="flex items-center space-x-3 p-2 rounded-md hover:bg-blue-100 hover:border-l-4 hover:border-blue-500"
          >
            <Heart size={20} className="text-[#A99FFF]" />
            <span>Donations</span>
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

      {/* Logout */}
      <div className="absolute bottom-5 left-5 bg-[#F0F2F5]">
        <button className="flex items-center space-x-3 p-2 text-gray-800 hover:text-red-500">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
