import React, { useState } from "react";
import { FiAlignJustify, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo2 from "../../assets/svg/logo.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full py-3 font-medium text-black bg-primary shadow-md lg:px-14">
      <div className="flex items-center justify-between mx-auto">
        <Link to="/">
          <img
            src={logo2}
            alt="Logo"
            className="bg-cover h-[40px] md:h-[50px] pl-3"
          />
        </Link>

        <nav className="items-center hidden space-x-12 md:flex">
          <Link to="/" className="hover:text-secondary text-white">
            Home
          </Link>
          <Link to="/allcoachings" className="hover:text-secondary text-white">
            Coaching's
          </Link>
          <Link to="/about" className="hover:text-secondary text-white">
            About Us
          </Link>
          <Link to="/new-contact" className="hover:text-secondary text-white">
            Contact Us
          </Link>
          <Link to="/faq" className="hover:text-secondary text-white">
            FAQ
          </Link>
        </nav>

        <div className="md:hidden pr-3">
          <button onClick={toggleMenu}>
            {!isOpen ? (
              <FiAlignJustify className="h-6 w-6 text-secondary" />
            ) : (
              <FiAlignJustify className="h-6 w-6 text-secondary" />
            )}
          </button>
        </div>

        <Link
          to="/register"
          className="hidden md:block hover:bg-primary bg-secondary border border-secondary 
           hover:no-underline rounded-full px-8 p-2 text-white transition-all duration-200 mr-3"
        >
          Register
        </Link>
      </div>

      <nav
        className={`fixed inset-0 w-full h-screen bg-white shadow-md z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
        style={{ top: "0", paddingTop: "50px" }}
      >
            <Link to="/">
          <img
            src={logo2}
            alt="Logo"
            className="absolute top-4 right-4 text-secondary text-2xl opacity-5 -z-40 transition-opacity duration-200"
            />
        </Link>
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-secondary text-2xl"
        >
          <FiX />
        </button>

        <Link
          to="/"
          onClick={closeMenu}
          className="block px-4 py-4 text-secondary hover:bg-gray-200 transition-colors duration-200 ease-in-out"
        >
          Home
        </Link>
        <Link
          to="/allcoachings"
          onClick={closeMenu}
          className="block px-4 py-4 text-secondary hover:bg-gray-200 transition-colors duration-200 ease-in-out"
        >
          Coaching's
        </Link>
        <Link
          to="/about"
          onClick={closeMenu}
          className="block px-4 py-4 text-secondary hover:bg-gray-200 transition-colors duration-200 ease-in-out"
        >
          About Us
        </Link>
        <Link
          to="/new-contact"
          onClick={closeMenu}
          className="block px-4 py-4 text-secondary hover:bg-gray-200 transition-colors duration-200 ease-in-out"
        >
          Contact Us
        </Link>
        <Link
          to="/faq"
          onClick={closeMenu}
          className="block px-4 py-4 text-secondary hover:bg-gray-200 transition-colors duration-200 ease-in-out"
        >
          FAQ
        </Link>
        <Link
          to="/register"
          onClick={closeMenu}
          className="block px-4 py-4 bg-secondary text-white hover:bg-gray-200 transition-colors duration-200 ease-in-out"
        >
          Registration
        </Link>
      </nav>
    </header>
  );
};

export default Header;
