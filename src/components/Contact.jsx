import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    mode: "onChange", // Enables real-time validation
    defaultValues: {
      name: "",
      email: "",
      serviceType: "",
      budget: 1000,
      message: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    toast.success("Form Submitted Successfully");
    reset();
  };

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We'd love to hear about your project. Fill out the form below, and
            let's get started!
          </p>
        </div>

        {/* Form */}
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name */}
            <div className="mb-4">
              <label className="block text-lg font-semibold mb-1">
                Full Name
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className={`w-full p-3 border rounded-lg focus:ring-2 ${
                  errors.name
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-indigo-600"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-lg font-semibold mb-1">
                Email Address
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Invalid email address",
                  },
                })}
                className={`w-full p-3 border rounded-lg focus:ring-2 ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-indigo-600"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Service Type */}
            <div className="mb-4">
              <label className="block text-lg font-semibold mb-1">
                What would you like to build?
              </label>
              <select
                {...register("serviceType", {
                  required: "Please select a service",
                })}
                className={`w-full p-3 border rounded-lg focus:ring-2 ${
                  errors.serviceType
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-indigo-600"
                }`}
              >
                <option value="">Select a Service</option>
                <option value="webApp">Web App</option>
                <option value="digitalMarketing">Digital Marketing</option>
                <option value="mobileApp">Mobile App</option>
                <option value="other">Other</option>
              </select>
              {errors.serviceType && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.serviceType.message}
                </p>
              )}
            </div>

            {/* Budget Range */}
            <div className="mb-4">
              <label className="block text-lg font-semibold mb-1">
                Your Budget
              </label>
              <input
                type="range"
                {...register("budget")}
                min="1000"
                max="10000"
                step="500"
                className="w-full"
                onChange={(e) => setValue("budget", e.target.value)}
              />
              <div className="flex justify-between text-sm text-gray-600 mt-1">
                <span>$1000</span>
                <span>${watch("budget")}</span>
                <span>$10000</span>
              </div>
            </div>

            {/* Message */}
            <div className="mb-4">
              <label className="block text-lg font-semibold mb-1">
                Message
              </label>
              <textarea
                {...register("message", {
                  required: "Message is required",
                  maxLength: {
                    value: 200,
                    message: "Maximum 200 characters allowed",
                  },
                })}
                className={`w-full p-3 border rounded-lg focus:ring-2 ${
                  errors.message
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-indigo-600"
                }`}
                rows="4"
              ></textarea>
              <p className="text-gray-500 text-sm">
                {watch("message")?.length || 0} / 200
              </p>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-full font-semibold hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
