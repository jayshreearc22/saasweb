import React, { useState } from 'react';
import navlogo from "../Componant/images/navlogo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" bg-gradient-to-tr from-blue-100 mt-9 ">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <img src={navlogo}/>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-4">
          <a href="#" className="text-black px-3 py-2 rounded hover:text-gray-500">About</a>
          <a href="#" className="text-black px-3 py-2 rounded hover:text-gray-500">Customer</a>
          <a href="#" className="text-black px-3 py-2 rounded hover:text-gray-500">Updates</a>
          <a href="#" className="text-black px-3 py-2 rounded hover:text-gray-500">Help</a>
          <button className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-600 focus:outline-none">Get For Free</button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          id="menu-toggle"
          className="lg:hidden focus:outline-none focus:ring-2 focus:ring-white p-2 rounded-md"
          onClick={toggleMobileMenu}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16v12H4zm-2 0h20v12H2zM4 12h16v12H4z"></path>
          </svg>
        </button>

        {/* Mobile Navigation Menu */}
        <div
          id="mobile-menu"
          className={`
            lg:hidden
            ${isOpen ? 'block fixed top-11 left-0 w-50 h-50 bg-gray-100 z-50 transition duration-300 ease-in-out overflow-y-auto' : 'hidden'}
          `}
        >
          <div className="container mx-auto px-4 pt-4 pb-8 flex flex-col space-y-4">
            <a href="#" className="text-black px-3 py-2 rounded hover:text-gray-700">About</a>
            <a href="#" className="text-black px-3 py-2 rounded hover:text-gray-700">Customer</a>
            <a href="#" className="text-black px-3 py-2 rounded hover:text-gray-700">Updates</a>
            <a href="#" className="text-black px-3 py-2 rounded hover:text-gray-700">Help</a>
            <button className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-600 focus:outline-none">Get For Free</button>
            <button onClick={toggleMobileMenu} className="text-black text-right focus:outline-none">Close</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
