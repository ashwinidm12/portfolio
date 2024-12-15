import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary text-white py-4 shadow-lg fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="home" smooth={true} offset={-70} duration={500}>
            Saam.js
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden">
          <button
            className="text-white text-2xl"
            onClick={toggleMenu}
            aria-label="Toggle navigation">
            <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </button>
        </div>

        {/* Menu Items */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex items-center space-x-8 md:space-x-6`}>
          <Link
            to="home"
            smooth={true}
            offset={-70}
            duration={500}
            className="hover:text-secondary transition duration-300">
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            offset={-70}
            duration={500}
            className="hover:text-secondary transition duration-300">
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            offset={-70}
            duration={500}
            className="hover:text-secondary transition duration-300">
            Projects
          </Link>
          <Link
            to="resume"
            smooth={true}
            offset={-70}
            duration={500}
            className="hover:text-secondary transition duration-300">
            Resume
          </Link>
          <Link
            to="contact"
            smooth={true}
            offset={-70}
            duration={500}
            className="hover:text-secondary transition duration-300">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
