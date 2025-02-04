import React from "react";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <>
      <div className=" mx-auto max-w-7xl px-4 pt-8 sm:px-6  lg:px-8 md:py-14 flex flex-col lg:flex-row gap-3 lg:justify-between">
        {/* Text Section */}
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Data to Empower Your </span>
            <span className="block text-indigo-600 xl:inline">
              online business
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Maximize your online presence with cutting-edge technology and
            expert solutions. we provide a range of services designed to drive
            your business forward in the digital space.
          </p>
          {/* Buttons Section */}
          <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-3">
            <a
              href="#services"
              className="px-8 border border-indigo-500 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10 text-center"
            >
              Our Services
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 my-4">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-lg shadow-lg"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt="Business data representation"
          />
        </div>
      </div>
    </>
  );
}
