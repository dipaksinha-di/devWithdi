import React from "react";
import { testimonials } from "../Data/data";

export default function Testimonials() {
  return (
    <>
      <div className="container mx-auto text-center px-6">
        <h2
          className="text-indigo-600 font-bold text-sm uppercase"
          data-aos="fade-up"
        >
          Testimonials
        </h2>
        <h3
          className="text-3xl font-bold text-gray-800 dark:text-white mt-3 lg:text-4xl"
          data-aos="fade-up"
        >
          Here's what our customers said
        </h3>
        <p
          className="text-lg text-gray-500 dark:text-gray-300 max-w-2xl mx-auto mt-4"
          data-aos="fade-up"
        >
          We’ve received countless positive reviews from clients who have seen
          real growth and success thanks to our innovative development
          solutions. Here’s what they have to say about working with us.
        </p>
      </div>
      <div className="container mx-auto mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-6  ">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 p-6 md:p-10 rounded-2xl shadow-xl border border-indigo-300"
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <p className="text-xl text-gray-700 dark:text-gray-300">
              {testimonial.text}
            </p>
            <div className="flex items-center mt-6 space-x-4">
              <img
                className="w-14 h-14 rounded-full"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <h4 className="text-lg font-medium text-gray-800 dark:text-white">
                  {testimonial.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {testimonial.position}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
