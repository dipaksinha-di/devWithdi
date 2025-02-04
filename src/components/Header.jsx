import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for the mobile menu
import { Link } from "react-scroll"; // Import Link from react-scroll
import { navLinks } from "../Data/data";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="home" // The section id to scroll to
          smooth={true}
          offset={-70} // Optional: Adjust for fixed navbar
          duration={500} // Duration of the scroll
          className="text-5xl font-bold text-blue-600"
        >
          di<span className="text-blue-900">.</span>
          <span className="text-2xl">dev</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path.replace("#", "")} // Use section id for scroll
              smooth={true}
              offset={-70}
              duration={500}
              className="text-gray-700 hover:text-blue-600 transition duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col space-y-4 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path.replace("#", "")} // Use section id for scroll
                smooth={true}
                offset={-70}
                duration={500}
                className="text-gray-700 hover:text-blue-600 transition duration-300"
                onClick={toggleMobileMenu}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
