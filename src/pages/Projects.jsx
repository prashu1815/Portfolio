import React from "react";
import Layout from "../components/Layout";

// Correct the import paths to assets folder
import gemini from "../assets/gemini.png"; // Correct path to gemini.png
import hayden from "../assets/hayden.png"; // Correct path to hayden.png

const projects = [
  {
    id: 1,
    title: "Gemini-AI Clone",
    imageUrl: gemini, // Use the imported image for Gemini
    description:
      "A Gemini AI clone refers to an AI system or platform developed to replicate or mimic the capabilities of Google's Gemini Ai",
    link: "https://gemini-ai-clone-two.vercel.app/", // Replace with actual project URL
  },
  {
    id: 2,
    title: "Hayden Chat-bot",
    imageUrl: hayden, // Use the imported image for Hayden
    description: "The Hayden Chatbot refers to an AI-driven conversational agent designed to interact with users in a human-like manner",
    link: "https://hayden-bot.vercel.app/", // Replace with actual project URL
  },
];

function Projects() {
  return (
    <Layout>
      <div
        className="flex items-center h-screen justify-center space-x-8 pl-32 rounded-3xl"
        style={{ background: "linear-gradient(to right, #ff7e5f, #feb47b)" }}
      >
        {/* Animation */}
        <div className="rounded-3xl shadow-2xl bg-white transform -translate-x-16">
          <dotlottie-player
            src="https://lottie.host/524b2f51-bb28-46c6-b57b-c135c2939beb/E625TZJmen.lottie"
            background="transparent"
            speed="1"
            style={{ width: "500px", height: "500px" }}
            loop
            autoplay
          ></dotlottie-player>
        </div>

        {/* Text */}
        <div className="text-right">
          <h4 className="font-semibold text-gray-800 text-4xl">
            "Every project is a journey...."
          </h4>
          <p className=" text-gray-700 mt-4 text-2xl font-serif">
            <br />
            It begins with a <b>"Vision"</b>
            <br />
            unfolds with <b>"Passion"</b>
            <br />
            and ends with <b>"Achievement"</b>
          </p>
        </div>
      </div>

      <div className="ml-10">
        <h2 className="text-4xl mt-20 inline-block bg-gray-700 text-white px-4 py-2 rounded-tr-4xl rounded-bl-4xl">
          Projects
        </h2>
      </div>

      {/* Projects Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 mx-10">
        {projects.map((project) => (
         <div
         key={project.id}
         className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out"
       >
       
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 text-sm mb-4">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Check out--&gt;
              </a>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Projects;
