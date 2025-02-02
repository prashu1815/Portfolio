import React, { useState } from "react";
import Layout from "../components/Layout";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    query: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
    alert("Form submitted!");
  };

  return (
    <Layout>
      {/* Lottie Animation Section */}
      <div
        className="flex items-center justify-center h-screen rounded-2xl shadow-2xl"
        style={{ background: "linear-gradient(to right, #1f4037, #99f2c8)" }}
      >
        <dotlottie-player
          src="https://lottie.host/a2f9cb1a-9229-430f-a489-54583dd290dd/qPrGqKPnzv.lottie"
          background="transparent"
          speed="1"
          style={{ width: "500px", height: "500px" }}
          loop
          autoplay
        ></dotlottie-player>
      </div>

      {/* Contact Form Section */}
      <div className="flex justify-center py-10">
      <div className="bg-gradient-to-r from-blue-600 to-pink-500 p-8 rounded-lg shadow-lg max-w-md w-full">

          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Contact Us For More
          </h2>
          
          <form onSubmit={handleSubmit} >
            {/* Name */}
            <div className="mb-4">
              <label
                className="block text-lg font-semibold text-white"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label
                className="block text-lg font-semibold text-white mb-2"
                htmlFor="email"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Query */}
            <div className="mb-4">
              <label
                className="block text-lg font-semibold text-white mb-2"
                htmlFor="query"
              >
                Your Query
              </label>
              <textarea
                id="query"
                name="query"
                value={formData.query}
                onChange={handleChange}
                className="w-full p-3 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Describe your query"
                rows="4"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-black text-white py-3 px-8 rounded-md text-lg font-semibold hover:bg-blue-300 transition-all duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
