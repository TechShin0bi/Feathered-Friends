"use client"

import { logo } from '@/public/assets';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.pageYOffset > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* First Navbar */}
      <nav className={`bg-gray-800 p-4 shadow-lg sticky top-0 w-full z-10`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0 flex items-center">
              {/* Parrot logo */}
              <Image src={logo} alt="Parrot Logo" className="h-12 rounded-full w-12" />
              {/* Your E-Commerce text */}
              <a href="/" className="text-white font-bold text-lg ml-2">Feathered Friends</a>
            </div>
            <div className="hidden md:block">
              <ul className="flex space-x-4">
                <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
                <li><a href="/products" className="text-gray-300 hover:text-white">Products</a></li>
                <li><a href="/about" className="text-gray-300 hover:text-white">About</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div className="md:hidden">
              {/* Mobile menu button */}
              <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu with animation */}
        <div className={`md:hidden transition-max-height duration-500 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
          <ul className="flex flex-col space-y-2 mt-4">
            <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
            <li><a href="/products" className="text-gray-300 hover:text-white">Products</a></li>
            <li><a href="/about" className="text-gray-300 hover:text-white">About</a></li>
            <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Second Navbar */}
      <nav className="bg-gray-900 p-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Search Bar */}
          <div className="w-1/4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 px-4 rounded-md bg-gray-800 text-white focus:outline-none"
            />
          </div>
          {/* Sign In / Sign Up Buttons */}
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-gray-300">Sign In</button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
