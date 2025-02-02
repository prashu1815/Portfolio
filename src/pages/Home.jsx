import React from "react";
import Layout from "../components/Layout";
import { FaReact, FaJava, FaJsSquare, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

function Home() {
  return (
    <div>
      <Layout>
        {/* Hero Section */}
        <div className="min-h-screen bg-gray-900 rounded-lg">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8 items-center lg:border-4 lg:border-white lg:transform lg:rotate-6 mx-11 z-50 bg-gray-900">
            {/* Lottie Animation */}
            <div className="ml-16 md:ml-4 lg:transform lg:rotate-z-12">
              <dotlottie-player
                src="https://lottie.host/4fa3e60d-f4c5-4b9d-a211-63959251b903/C5iG046GaN.lottie"
                background="transparent"
                className="w-64 h-64 md:w-80 md:h-80"
                speed="1"
                loop
                autoplay
                aria-label="Animation of a developer working"
              ></dotlottie-player>
            </div>

            {/* Text Section */}
            <div className="font-bold px-10 lg:transform lg:rotate-z-12">
              <h1 className="text-white text-4xl md:text-4xl lg:text-7xl xl:text-7xl 2xl:text-7xl">
                Hii, I am <br />
                <b className="text-yellow-500">Sai Prasanth</b>
              </h1>

              <h1 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl">
                FullStack <b className="text-teal-400">Developer</b>
              </h1>
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <section className="mt-20">
          <h1 className="text-4xl font-bold text-slate-700 my-8 text-center">
            What I Build With
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center mt-16">
            <div>
              <FaReact size={80} color="cyan" className="mx-auto" />
            </div>
            <div>
              <FaJava
                size={80}
                color="orange"
                className="mx-auto lg:animate-bounce"
              />
            </div>
            <div>
              <FaJsSquare size={80} color="green" className="mx-auto" />
            </div>
            <div>
              <FaHtml5
                size={80}
                color="red"
                className="mx-auto lg:animate-bounce"
              />
            </div>
            <div>
              <FaCss3 size={80} color="blue" className="mx-auto" />
            </div>
            <div>
              <SiMysql
                size={80}
                color="orange"
                className="mx-auto lg:animate-bounce"
              />
            </div>
          </div>
        </section>

        {/* Java and JavaScript Section */}
        <div className="relative text-center h-52 bg-gray-400 mt-16 rounded-lg">
          <h1 className="text-white font-bold text-4xl text-center py-10">
            "Crafting magic with Java & JavaScript!"
          </h1>
        </div>

        {/* About Section */}
        <div className="relative -mt-16 bg-emerald-200 text-black lg:max-w-5xl mx-auto flex flex-col md:flex-row items-center p-10 shadow-2xl rounded-lg z-10 w-full md:w-auto sm:w-full hover:bg-blue-200">
          {/* Lottie Animation */}
          <div className="w-full md:w-1/2 flex justify-center">
            <dotlottie-player
              src="https://lottie.host/67dfbbd3-9ef9-401d-8e1e-d32adfbb0756/vVhBUKU1fx.lottie"
              background="transparent"
              speed="1"
              style={{ width: "300px", height: "300px" }}
              loop
              autoplay
              aria-label="Animation of Java and JavaScript"
            ></dotlottie-player>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 pl-6 mt-6 md:mt-0">
            <p className="text-lg font-semibold">
              <b>Java</b> and <b>JavaScript</b> are two powerful tools that
              allow developers to build everything from dynamic web applications
              to enterprise-level software.
            </p>
          </div>
        </div>

        {/* My Dev Stack Section */}
        <div className="relative text-center h-52 bg-orange-300 mt-20 rounded-lg">
          <h1 className="text-white font-bold text-4xl text-center py-10">
            "My Dev Stack"
          </h1>
        </div>

        {/* About Section */}
        <div className="relative bg-blue-200 lg:max-w-5xl mx-auto flex flex-col items-center p-10 shadow-2xl rounded-lg z-10 w-full -mt-20">
          <div className="flex justify-center items-center mb-8">
            <dotlottie-player
              src="https://lottie.host/fd2725b8-fbb2-4667-9874-15b5ad1ea16e/Vkz3zmYcxg.lottie"
              background="transparent"
              speed="1"
              style={{ height: "500px", width: "500px" }}
              loop
              autoplay
              aria-label="Animation of development stack"
            ></dotlottie-player>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-black">
            {/* Frontend Section */}
            <div className="flex flex-col">
              <h4 className="text-2xl text-emerald-900">
                <b>Frontend</b>
              </h4>
              <ul className="text-xl">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>

            {/* UI/UX Section */}
            <div className="flex flex-col lg:items-center lg:text-center">
              <h4 className="text-2xl text-yellow-900">
                <b>UI/UX</b>
              </h4>
              <ul className="text-xl">
                <li>React</li>
                <li>Tailwindcss</li>
              </ul>
            </div>

            {/* Backend and DB Section */}
            <div className="flex flex-col sm:items-end sm:text-right">
              <h4 className="text-2xl text-emerald-900">
                <b>Backend and DB</b>
              </h4>
              <ul className="text-xl">
                <li>Java</li>
                <li>Advanced Java</li>
                <li>Mysql</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Dev Info Section */}
        <div className="mt-10">
          <h1 className="text-4xl text-gray-500 text-center font-bold mt-20">
            Who is Sai Prasanth?
          </h1>
          <div className="flex items-center justify-center min-h-screen">
  <div className="flex justify-center items-center relative">
  <dotlottie-player
      src="https://lottie.host/e58f8f30-3bb7-413c-8826-4254aae14703/BX7HaWbLzR.lottie"
      background="transparent"
      speed="1"
      style={{ width: "600px", height: "600px" }}
      loop
      autoplay
    ></dotlottie-player>

    <div className="absolute text-center font-serif">
      <h4>
        <b>Hi,Hello,Namaste...</b>
      </h4>
      <div className="text-left">
      <br />
      <p>
        &#123;
        <br />
        "name":"Sai Prasanth.J",
        <br />
        "From":"Puttaparthy",
        <br />
        "email":"jsaiprasanth18@gmail.com",
        <br />
        "designation":"B.Tech(ECE)"
        <br />
        &#125;
      </p>
      </div>
    </div>
  </div>
</div>

        </div>
      </Layout>
    </div>
  );
}

export default Home;
