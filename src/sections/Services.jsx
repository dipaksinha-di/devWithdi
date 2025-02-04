import React, { useEffect } from "react";
import { FaChartLine, FaCode, FaMobileAlt } from "react-icons/fa";
import AOS from "aos";
import { Link } from "react-scroll";
import "aos/dist/aos.css";

const Services = () => {
  // Services data
  const services = [
    {
      icon: <FaCode className="w-12 h-12" />,
      title: "Web Development",
      description:
        "Custom website development with modern technologies and responsive design.",
    },
    {
      icon: <FaMobileAlt className="w-12 h-12" />,
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications for iOS and Android.",
    },
    {
      icon: <FaChartLine className="w-12 h-12" />,
      title: "Digital Marketing",
      description:
        "Data-driven digital marketing strategies to boost your online presence.",
    },
    // Add more services as needed
  ];

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
        {/* Stats Section */}

        {/* Services Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We deliver exceptional digital solutions that drive growth and
            innovation for businesses worldwide.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              data-aos="fade-up"
              data-aos-delay={index * 100} // Delay animation based on the index
            >
              <div className="text-indigo-600 mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className="bg-indigo-500 text-white rounded-2xl p-12 text-center relative overflow-hidden"
          data-aos="zoom-in"
        >
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-700 rounded-full opacity-20"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-indigo-700 rounded-full opacity-20"></div>

          <h2 className="text-3xl font-bold mb-4">Start Your Project Today</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Let's transform your ideas into reality. Our team is ready to create
            something amazing together.
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-colors">
            <a to={"/contact"}> Get Started </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
