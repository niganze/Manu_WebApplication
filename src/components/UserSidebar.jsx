import React from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  BarChart,
  Heart,
  Settings,
  LogOut,
} from "lucide-react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const UserSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    navigate("/landing");
  };

  return (
    <div className="w-64 bg-[#F0F2F5] text-gray-800 h-full shadow-md">
      {/* Logo */}
      <div className="p-5 text-2xl font-bold text-[#A99FFF] cursor-pointer">
        <Link to="/">Manu</Link>
      </div>

      {/* Navigation Links */}
      <ul className="space-y-2 p-5">
        <li>
          <Link
            to=""
            className="flex items-center space-x-3 p-2 rounded-md hover:bg-blue-100 hover:border-l-4 hover:border-blue-600"
          >
            <LayoutDashboard size={20} className="text-gray-600" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            to="items"
            className="flex items-center space-x-3 p-2 rounded-md hover:bg-blue-100 hover:border-l-4 hover:border-blue-600"
          >
            <Package size={20} className="text-gray-600" />
            <span> Projects</span>
          </Link>
        </li>
        <li>
          <Link
            to="Usercharities"
            className="flex items-center space-x-3 p-2 rounded-md hover:bg-blue-100 hover:border-l-4 hover:border-blue-600"
          >
            <Package size={20} className="text-gray-600" />
            <span> All Charities</span>
          </Link>
        </li>
        {/* <li>
          <Link to="donations" className="flex items-center space-x-3 p-2 rounded-md hover:bg-blue-100 hover:border-l-4 hover:border-blue-600">
            <Heart size={20} className="text-gray-600" />
            <span>Donations</span>
          </Link>
        </li> */}
        <li>
          <Link
            to="viewMarketplace"
            className="flex items-center space-x-3 p-2 rounded-md hover:bg-blue-100 hover:border-l-4 hover:border-blue-600"
          >
            <MdOutlineShoppingBag size={20} className="text-gray-600" />
            <span>Market place</span>
          </Link>
        </li>
        <li>
          <Link
            to="userDonation"
            className="flex items-center space-x-3 p-2 rounded-md hover:bg-blue-100 hover:border-l-4 hover:border-blue-600"
          >
            <Heart size={20} className="text-gray-600" />
            <span>Donation</span>
          </Link>
        </li>
        <li>
          <Link
            to="analytics"
            className="flex items-center space-x-3 p-2 rounded-md hover:bg-blue-100 hover:border-l-4 hover:border-blue-600"
          >
            <BarChart size={20} className="text-gray-600" />
            <span>Analytics</span>
          </Link>
        </li>
        <li>
          <Link
            to="userSetting"
            className="flex items-center space-x-3 p-2 rounded-md hover:bg-blue-100 hover:border-l-4 hover:border-blue-600"
          >
            <Settings size={20} className="text-gray-600" />
            <span>Settings</span>
          </Link>
        </li>
      </ul>

      {/* Logout */}
      <div className="absolute bottom-5 left-5 bg-[#F0F2F5]">
    <button className="flex items-center space-x-3 p-2 text-gray-800 hover:text-red-600" onClick={handleLogout}>
          <LogOut size={20} />
          <span>Logout</span>
        </button> 
      </div>
    </div>
  );
};

export default UserSidebar;
