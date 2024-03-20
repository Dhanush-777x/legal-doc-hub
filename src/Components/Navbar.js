// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="py-6 px-8 flex items-center justify-between bg-transparent fixed top-0 left-0 w-full z-10">
      <div className="hidden md:flex items-center flex-grow">
        <img src={logo} alt="Logo" className="h-8 mr-4" />
        <h1 className="text-white font-bold text-lg flex-grow">LegalChain</h1>
        <div className="text-right space-x-8">
          <Link to="/" className="text-white font-semibold hover:text-green-500">Home</Link>
          <Link to="/features" className="text-white font-semibold hover:text-green-500">Features</Link>
          <Link to="/about" className="text-white font-semibold hover:text-green-500">About</Link>
          <Link to="/contact" className="text-white font-semibold hover:text-green-500">Contact</Link>
          <Link to="/login" className="bg-white text-black px-4 py-2 rounded-md hover:scale-110 transition duration-300 ease-in-out">Login</Link>
          <Link to="/signup" className="bg-green-500 text-black px-4 py-2 rounded-md hover:scale-110 transition duration-300 ease-in-out">Sign Up</Link>
        </div>
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white">
          <FontAwesomeIcon icon={faBars} className="text-lg" />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <button onClick={closeMenu} className="absolute top-4 right-4 text-white">
              <FontAwesomeIcon icon={faTimes} className="text-lg" />
            </button>
            <Link to="/" className="text-white font-semibold mb-4 hover:text-accent" onClick={closeMenu}>Home</Link>
            <Link to="/features" className="text-white font-semibold mb-4 hover:text-accent" onClick={closeMenu}>Features</Link>
            <Link to="/about" className="text-white font-semibold mb-4 hover:text-accent" onClick={closeMenu}>About</Link>
            <Link to="/contact" className="text-white font-semibold mb-4 hover:text-accent" onClick={closeMenu}>Contact</Link>
            <Link to="/login" className="bg-white text-black px-4 py-2 mb-4 rounded-md hover:scale-110 transition duration-300 ease-in-out" onClick={closeMenu}>Login</Link>
            <Link to="/signup" className="bg-green-500 text-black px-4 py-2 rounded-md hover:scale-110 transition duration-300 ease-in-out" onClick={closeMenu}>Sign Up</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
