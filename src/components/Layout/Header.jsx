import React, { useState } from "react";
import { FiAlertCircle, FiAlignJustify, FiCrosshair } from "react-icons/fi";
// import logo from "../../assets/logo1.png";
import { Link } from "react-router-dom";
import cross from "../../assets/download.png";
import logo2 from "../../assets/svg/logo.svg"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 z-50 w-full  py-3 font-medium text-black bg-primary shadow-md lg:px-14">
      <div className=" flex items-center justify-between mx-auto">
        <Link to="/">
          <img src={logo2} alt="Logo" className="bg-cover h-[70px] w-[250px] " />
        </Link>

        <nav className="items-center hidden space-x-12  md:flex">
          <Link to="/" className="hover:text-secondary text-white"> 
            Home
          </Link>
          <Link to="/mylearning" className="hover:text-secondary text-white">
            Coaching's
          </Link>
          <Link to="/about" className="hover:text-secondary text-white">
            About Us
          </Link>
          <Link to="/new-contact" className="hover:text-secondary text-white">
            Contact Us
          </Link>
          <Link to="/new-contact" className="hover:text-secondary text-white">
            FAQ
          </Link>
        </nav>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {!isOpen ? <FiAlignJustify /> : <img className="w-5" src={cross} />}
          </button>
        </div>

        <Link
          to="/register"
          className="hidden md:block hover:bg-primary bg-secondary border border-secondary 
           hover:no-underline rounded-full px-8 p-2 text-white transition-all duration-200"
        >
          Register
        </Link>
      </div>

      {isOpen && (
        <nav className=" bg-white shadow-md md:hidden">
          <Link to="/" className="block px-4 py-2 hover:bg-gray-200">
            Home
          </Link>
          <Link to="/mylearning" className="block px-4 py-2 hover:bg-gray-200">
            My Learning
          </Link>
          <Link to="/about" className="block px-4 py-2 hover:bg-gray-200">
            About
          </Link>
          <Link to="/new-contact" className="block px-4 py-2 hover:bg-gray-200">
            Contact
          </Link>
          <Link to="/login" className="block px-4 py-2 hover:bg-gray-200">
            Login
          </Link>
          <Link
            to="/register"
            className="block px-4 py-2 hover:bg-gray-200 text-mywhite"
          >
            Registration
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
