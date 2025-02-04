import React from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import { navLinks } from "../Data/data";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Grid */}
        <div className="py-10 flex justify-between items-center flex-col xl:flex-row">
          <div className="flex items-center flex-col xl:flex-row">
            {/* Logo */}
            <Link
              to="home" // Target section ID
              smooth={true}
              offset={-70} // Adjust for fixed navbar
              duration={500} // Scroll duration
              className="text-4xl font-bold text-blue-600"
            >
              di<span className="text-blue-900">.</span>
              <span className="text-2xl">dev</span>
            </Link>
            <ul className="text-lg flex items-center flex-col md:flex-row py-8 gap-6 md:gap-12 xl:border-l border-gray-200 xl:ml-11 xl:pl-11 transition-all duration-500">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path.replace("#", "")} // Use section ID to scroll
                    smooth={true}
                    offset={-70} // Optional: Adjust for fixed navbar
                    duration={500}
                    className="text-gray-800 hover:text-indigo-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="border-l border-slate-300 h-10 ml-8 hidden md:flex"></p>
            <p className="ml-10"> Copyright 2025. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
