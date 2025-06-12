import React from "react";
import Layout from "../components/Layout";

import gemini from "../assets/gemini.png";
import hayden from "../assets/hayden.png";
// You can add another image for QuickBites if available

const projects = [
  {
    id: 1,
    title: "Gemini-AI Clone",
    imageUrl: gemini,
    description:
      "A Gemini AI clone refers to an AI system or platform developed to replicate or mimic the capabilities of Google's Gemini AI.",
    link: "https://gemini-ai-clone-two.vercel.app/",
    githubLink: "https://github.com/prashu1815/gemini-ai-clone",
  },
  {
    id: 2,
    title: "Hayden Chat-bot",
    imageUrl: hayden,
    description:
      "The Hayden Chatbot refers to an AI-driven conversational agent designed to interact with users in a human-like manner.",
    link: "https://hayden-bot.vercel.app/",
    githubLink: "https://github.com/prashu1815/hayden-bot",
  },
  {
    id: 3,
    title: "QuickBites",
    imageUrl: "data:image/png;base64,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", // Replace with correct image if available
    description:
      "QuickBites is a dynamic web app for food ordering and restaurant management built with Java and JSP.",
    videoLink: "https://res.cloudinary.com/dyhbpohrb/video/upload/v1749732056/nuey93w9pwdbxbcbum71.mp4",
    githubLink: "https://github.com/prashu1815/QuickBites",
  },
];

function Projects() {
  return (
    <Layout>
      {/* Intro Section */}
      <div
        className="flex items-center h-screen justify-center space-x-8 pl-32 rounded-3xl"
        style={{ background: "linear-gradient(to right, #ff7e5f, #feb47b)" }}
      >
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

        <div className="text-right">
          <h4 className="font-semibold text-gray-800 text-4xl">
            "Every project is a journey...."
          </h4>
          <p className="text-gray-700 mt-4 text-2xl font-serif">
            <br />
            It begins with a <b>"Vision"</b>
            <br />
            unfolds with <b>"Passion"</b>
            <br />
            and ends with <b>"Achievement"</b>
          </p>
        </div>
      </div>

      {/* Projects Header */}
      <div className="ml-10">
        <h2 className="text-4xl mt-20 inline-block bg-gray-700 text-white px-4 py-2 rounded-tr-4xl rounded-bl-4xl">
          Projects
        </h2>
      </div>

      {/* Projects Grid */}
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

              {/* Live Demo or Video */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline block"
                >
                  🔗 View Website →
                </a>
              )}
              {project.videoLink && (
                <a
                  href={project.videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:underline block"
                >
                  🎬 Watch Video →
                </a>
              )}

              {/* GitHub Repo */}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:underline block mt-2"
                >
                  🐙 GitHub Repo →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Projects;
