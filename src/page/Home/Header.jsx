import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#1e3a8a] text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold">ManuApp</Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-[#A99FFF] transition-colors">Home</Link>
            <Link to="/about" className="hover:text-[#A99FFF] transition-colors">About Us</Link>
            <Link to="/service" className="hover:text-[#A99FFF] transition-colors">Service</Link>
            <Link to="/marketplace" className="hover:text-[#A99FFF] transition-colors">Market Place</Link>
            <Link to="/community" className="hover:text-[#A99FFF] transition-colors">Community Shelter</Link>
            <Link to="/impact" className="hover:text-[#A99FFF] transition-colors">Impact</Link>
            <Link to="/blogs" className="hover:text-[#A99FFF] transition-colors">Blogs</Link>
          </nav>

          {/* Login Button */}
          <div className="hidden md:block">
            <Link to="/login" className="bg-[#A99FFF] text-white px-4 py-2 rounded-md font-medium hover:bg-purple-400 transition-colors">
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="hover:text-[#A99FFF] transition-colors" onClick={toggleMenu}>Home</Link>
              <Link to="/about" className="hover:text-[#A99FFF] transition-colors" onClick={toggleMenu}>About Us</Link>
              <Link to="/marketplace" className="hover:text-[#A99FFF] transition-colors" onClick={toggleMenu}>Market Place</Link>
              <Link to="/community" className="hover:text-[#A99FFF] transition-colors" onClick={toggleMenu}>Community Shelter</Link>
              <Link to="/clarity" className="hover:text-[#A99FFF] transition-colors" onClick={toggleMenu}>Clarity</Link>
              <Link to="/impact" className="hover:text-[#A99FFF] transition-colors" onClick={toggleMenu}>Impact</Link>
              
              <Link to="/login" className="bg-[#A99FFF] text-white px-4 py-2 rounded-md font-medium hover:bg-purple-400 transition-colors w-fit">
                Login
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;