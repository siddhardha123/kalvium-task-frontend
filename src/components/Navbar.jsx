import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import {  useNavigate } from 'react-router-dom';
import { BreadCrump } from '../icons';
const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const {logout} = useAuth();
  const  navigate = useNavigate();
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleLogout = () =>{
     navigate('/')
     logout()
  }
  return (
    <nav className="bg-white p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-red-600 text-3xl font-semibold">
            Kalvium
          </a>
        </div>
        <div className="hidden md:flex space-x-6">
            <button onClick={handleLogout}>logout</button>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-red-600 focus:outline-none"
          >
            <BreadCrump/>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden text-red-600">
          <div className="flex flex-col justify-center space-y-2 p-4">
          <button onClick={handleLogout}>logout</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
