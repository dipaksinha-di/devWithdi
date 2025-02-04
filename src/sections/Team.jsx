import React, { useEffect } from "react";
import { FaUser, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import {teamMembers} from '../Data/data'
import AOS from "aos";
import "aos/dist/aos.css";

const Team = () => {
  // Team member data
 

  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration of the animation
      easing: "ease-in-out", // Easing function for the animation
      once: true, // Make the animations trigger only once
    });
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Team Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our talented team is dedicated to delivering the best results for
            our clients.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
              data-aos="fade-up"
              data-aos-delay={index * 100} // Delay animation based on the index
            >
              <img
                src={member.imgSrc}
                alt={member.name}
                className="w-32 h-32 object-cover mx-auto rounded-full mb-6"
              />
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-4">{member.role}</p>

              <div className="flex justify-center space-x-4">
                <a
                  href={member.socialLinks.linkedin}
                  className="text-indigo-600 hover:text-indigo-800"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href={member.socialLinks.twitter}
                  className="text-indigo-400 hover:text-indigo-600"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href={member.socialLinks.facebook}
                  className="text-indigo-700 hover:text-indigo-900"
                >
                  <FaFacebook size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
