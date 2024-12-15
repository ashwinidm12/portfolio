import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 fixed top-0 left-0 w-full z-10 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Brand/Logo */}
        <a className="text-white text-2xl font-bold" href="#">
          Saam.js
        </a>

        {/* Hamburger Button (Mobile) */}
        <button
          className="text-white lg:hidden"
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">☰</span>
        </button>

        {/* Navbar Links */}
        <div
          className={`lg:flex lg:items-center lg:space-x-6 ${
            isOpen ? "block" : "hidden"
          } lg:block w-full`}
          id="navbarNav">
          <ul className="flex flex-col lg:flex-row lg:space-x-6 text-white items-center justify-center w-full">
            <li>
              <Link
                className="hover:text-gray-400 transition-all"
                to="home"
                smooth={true}
                duration={500}
                offset={-70}
                href="#home">
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-gray-400 transition-all"
                to="about"
                smooth={true}
                duration={500}
                offset={-70}
                href="#about">
                About
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-gray-400 transition-all"
                to="projects"
                smooth={true}
                duration={500}
                offset={-70}
                href="#projects">
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-gray-400 transition-all"
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                href="#contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
