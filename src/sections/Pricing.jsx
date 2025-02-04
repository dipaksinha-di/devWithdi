const PricingSection = () => {
  const FEATURES = [
    "Innovative Design",
    "Seamless Integration",
    "Scalability",
    "Mobile-First Approach",
    "Fast Loading Speed",
    "Secure Solutions",
    "SEO Optimization",
    "User-Centered Experience",
    "Cross-Platform Compatibility",
  ];

  const PLANS = [
    {
      title: "START",
      price: "Free",
      duration: "Next 3 months",
      isPopular: false,
      features: [
        { type: "check" },
        { type: "check" },
        { type: "text", value: "Feature" },
        { type: "check" },
        { type: "cross" },
        { type: "check" },
        { type: "cross" },
        { type: "cross" },
        { type: "cross" },
      ],
      buttonText: "Button",
      buttonDescription:
        "Literally you probably haven't heard of them jean shorts.",
    },
    {
      title: "PRO",
      price: "$38",
      duration: "Charging $456 per year",
      isPopular: true,
      features: [
        { type: "check" },
        { type: "check" },
        { type: "text", value: "Feature" },
        { type: "check" },
        { type: "check" },
        { type: "check" },
        { type: "check" },
        { type: "cross" },
        { type: "cross" },
      ],
      buttonText: "Button",
      buttonDescription:
        "Literally you probably haven't heard of them jean shorts.",
    },
    {
      title: "BUSINESS",
      price: "$54",
      duration: "Charging $648 per year",
      isPopular: false,
      features: [
        { type: "check" },
        { type: "check" },
        { type: "text", value: "Feature" },
        { type: "check" },
        { type: "check" },
        { type: "check" },
        { type: "check" },
        { type: "check" },
        { type: "check" },
      ],
      buttonText: "Button",
      buttonDescription:
        "Literally you probably haven't heard of them jean shorts.",
    },
  ];

  return (
    <section className="text-gray-700 body-font overflow-x-scroll md:overflow-hidden border-t border-gray-200 w-11/12 mx-auto px-2">
      <div className="container  pb-4 pt-10 mx-auto flex ">
        {/* Features List */}
        <div className="lg:w-1/4 mt-48  lg:block">
          <div className="mt-px border-t border-gray-300 flex flex-col gap-0 whitespace-nowrap border-b border-l rounded-tl-lg rounded-bl-lg ">
            {FEATURES.map((feature, index) => (
              <p
                key={feature}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : ""
                } text-gray-900 h-12 text-center px-4  font-semibold flex items-center justify-start ${
                  index === 0 ? "-mt-px" : ""
                }`}
              >
                {feature}
              </p>
            ))}
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="flex lg:w-3/4 w-full  lg:border border-gray-300 rounded-lg">
          {PLANS.map((plan, planIndex) => (
            <div
              key={plan.title}
              className={`lg:w-1/3 w-full mb-10 lg:mb-0 border-2 text-sm ${
                plan.isPopular
                  ? "border-indigo-500 rounded-lg relative"
                  : "border-gray-300 lg:border-none"
              } ${planIndex === 0 ? "rounded-lg lg:rounded-none" : ""} ${
                planIndex === 2 ? "rounded-lg lg:rounded-none" : ""
              }`}
            >
              {plan.isPopular && (
                <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                  POPULAR
                </span>
              )}

              {/* Plan Header */}
              <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
                <h3 className="tracking-widest">{plan.title}</h3>
                <h2 className="md:text-5xl  text-gray-900 font-medium leading-none mb-4 mt-2">
                  {plan.price}
                  {!plan.price.includes("Free") && (
                    <span className="text-gray-600 text-base ml-1">/mo</span>
                  )}
                </h2>
                <span className="text-sm text-gray-600">{plan.duration}</span>
              </div>

              {/* Features */}
              {plan.features.map((feature, index) => (
                <div
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : ""
                  } text-gray-600 h-12 text-center px-2 flex items-center justify-center ${
                    index === 0 ? "-mt-px border-t border-gray-300" : ""
                  }`}
                >
                  {feature.type === "check" && (
                    <span className="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                  )}
                  {feature.type === "cross" && (
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.2"
                      className="w-5 h-5 text-gray-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 6L6 18M6 6l12 12"></path>
                    </svg>
                  )}
                  {feature.type === "text" && (
                    <span className="text-gray-600">{feature.value}</span>
                  )}
                </div>
              ))}

              {/* Button */}
              <div className="border-t border-gray-300 p-6 text-center">
                <button className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">
                  {plan.buttonText}
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                <p className="text-xs text-gray-500 mt-3">
                  {plan.buttonDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
