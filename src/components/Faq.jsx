import React, { useState } from "react";
import { faqData } from "../Data/data";

const FAQ = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-screen-md mx-auto p-10 dark:bg-gray-800">
      <h1 className="text-center text-3xl font-bold pb-10">
        FAQ's (Frequntly Asked Qustions)
      </h1>
      <div className="gap-1 flex flex-col" id="accordion-flush" data-accordion="collapse">
        {faqData.map((item, index) => (
          <div className="border border-indigo-200 rounded-md" key={index}>
            <h3 id={` accordion-flush-heading-${index}`}>
              <button
                type="button"
                className={`flex items-center justify-between w-full py-5 px-4 font-medium text-left border-b border-gray-200 dark:border-gray-700 ${
                  activeIndex === index
                    ? "bg-white dark:bg-gray-900 text-gray-900 dark:text-white "
                    : "text-gray-500 dark:text-gray-400"
                }`}
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`accordion-flush-body-${index}`}
              >
                <span>{item.question}</span>
                <svg
                  className={`w-6 h-6 shrink-0 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </h3>
            <div
              id={`accordion-flush-body-${index}`}
              className={activeIndex === index ? "" : "hidden"}
              aria-labelledby={`accordion-flush-heading-${index}`}
            >
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400 px-4">
                  {item.answer}
                </p>
                {item.link && (
                  <p className="text-gray-500 dark:text-gray-400">
                    Check out{" "}
                    <a
                      href={item.link}
                      className="text-purple-600 dark:text-purple-500 hover:underline"
                    >
                      {item.linkText}
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
