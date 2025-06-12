// ResumePage.js

import React from "react";
import Layout from "../components/Layout";
import resume from "../assets/resume.png";

function Resume() {
  return (
    <Layout>
      <div className="bg-gray-700 h-screen flex justify-center items-center">
        <div className="flex flex-col md:flex-row items-center md:space-x-10 space-y-6 md:space-y-0">
          {/* Resume Image */}
          <div className="flex justify-center md:w-1/2">
            <img
              src={resume} // Your resume image
              alt="Resume"
              className="h-96 rounded-3xl shadow-2xl"
            />
          </div>

          {/* Text Section */}
          <div className="text-center md:text-left text-white md:w-1/2">
            <h2 className="text-4xl font-semibold mb-6">Check Out My Resume</h2>
            <p className="text-xl mb-8">
              Explore about me, skills, and accomplishments. Click below to get
              the full picture of my journey!
            </p>
            <a
              href="https://collection.cloudinary.com/dyhbpohrb/6672bf9e803b55b37da550485dc35fe1" // Link to download the resume
              download
              className="inline-block px-8 py-3 text-lg font-semibold text-white bg-blue-700 rounded-lg shadow-lg hover:bg-blue-800 transform transition-all duration-300 hover:scale-105"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Resume;
