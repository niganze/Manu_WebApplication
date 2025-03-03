import React, { useState, useRef, useEffect } from "react"; 
import { Link } from "react-router-dom"; 
import { Bell, User, Search, Menu } from "lucide-react";  

const NavbarUser = () => {   
  const [menuOpen, setMenuOpen] = useState(false);   
  const [notifications, setNotifications] = useState(3);   
  const menuRef = useRef(null);    
  
  // Close dropdown when clicking outside   
  useEffect(() => {     
    const handleClickOutside = (event) => {       
      if (menuRef.current && !menuRef.current.contains(event.target)) {         
        setMenuOpen(false);       
      }     
    };     
    document.addEventListener("mousedown", handleClickOutside);     
    return () => {       
      document.removeEventListener("mousedown", handleClickOutside);     
    };   
  }, []);    
  
  return (     
    <nav className="flex items-center justify-between px-4 py-3 bg-white shadow-md">       
      {/* Left Section - Search Bar & Mobile Menu */}       
      <div className="flex items-center">         
        <button className="mr-4 md:hidden p-2 rounded-full hover:bg-purple-100">           
          <Menu size={20} className="text-[#C095EB]" />         
        </button>         
        <div className="relative">           
          <input             
            type="text"             
            placeholder="Search..."             
            className="pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#C095EB]"           
          />           
          <Search size={18} className="absolute left-3 top-2.5 text-gray-500" />         
        </div>       
      </div>       
      
      {/* Right Section - Notifications & Profile */}       
      <div className="flex items-center space-x-4">         
        {/* Notifications */}         
        <div className="relative">           
          <button className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 transition-all">             
            <Bell size={20} className="text-[#C095EB]" />           
          </button>           
          {notifications > 0 && (             
            <span className="absolute -top-1 -right-1 bg-[#C095EB] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">               
              {notifications}             
            </span>           
          )}         
        </div>         
        
        {/* Profile Dropdown */}         
        <div className="relative" ref={menuRef}>           
          <button             
            onClick={() => setMenuOpen(!menuOpen)}             
            className="bg-purple-100 p-2 rounded-full hover:bg-purple-200 transition-all"             
            aria-label="User Menu"           
          >             
            <User size={20} className="text-[#C095EB]" />           
          </button>           
          {menuOpen && (             
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-purple-100">               
              <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">Profile</Link>               
              <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">Settings</Link>               
              <div className="border-t border-purple-100 my-1"></div>               
              <Link to="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">Logout</Link>             
            </div>           
          )}         
        </div>       
      </div>     
    </nav>   
  ); 
};  

export default NavbarUser;