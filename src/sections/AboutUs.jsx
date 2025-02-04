import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  return (
    <div className="sm:flex items-center max-w-screen-xl mx-auto p-5">
      {/* Image Section */}
      <div className="sm:w-1/2 p-5 flex justify-center">
        <img
          src="https://i.imgur.com/WbQnbas.png"
          alt="About Our Company"
          className="object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="sm:w-1/2 p-5 text-center sm:text-left">
        <span className="text-gray-500 border-b-2 border-indigo-600 uppercase text-xs sm:text-sm">
          About Us
        </span>
        <h2 className="my-4 font-bold text-3xl sm:text-4xl">
          About <span className="text-indigo-600">Our Company</span>
        </h2>
        <p className="text-gray-700 text-sm sm:text-base">
          At Di.dev , we specialize in turning your digital ideas into reality.
          Our team of developers and designers creates innovative,
          high-performance web and mobile solutions tailored to your business
          needs. We focus on delivering user-friendly, scalable products that
          drive growth and ensure long-term success. Let's build something great
          together!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
