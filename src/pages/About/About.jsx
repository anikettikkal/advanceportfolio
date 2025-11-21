import React from "react";

export default function About() {
  return (
    <section className="min-h-screen bg-black text-white flex justify-center items-center px-6 py-16">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src="https://github.com/anikettikkal.png"
            alt="Profile"
            className="rounded-2xl w-64 h-64 object-cover shadow-lg border-2 border-orange-600 hover:scale-105 duration-300"
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-4xl font-bold text-orange-500 mb-4">About Me</h2>

          <p className="text-gray-300 leading-7 mb-4">
            Hi, I'm <span className="text-white font-semibold">Aniket Tikkal</span>, 
            a passionate <span className="text-orange-500 font-semibold">MERN Stack Developer</span> 
            and Frontend Enthusiast from Pune.
          </p>

          <p className="text-gray-400 leading-7 mb-4">
            I love creating modern, responsive and user-friendly web applications 
            using technologies like React, Tailwind CSS, JavaScript and Node.js. 
            I enjoy transforming ideas into interactive digital experiences.
          </p>

          <p className="text-gray-400 leading-7 mb-6">
            I am a fresher looking for opportunities where I can grow, learn, 
            and contribute to real-world projects.
          </p>

          <div className="flex gap-4">
            <a
              href="https://github.com/anikettikkal"
              target="_blank"
              className="border border-orange-600 text-orange-500 px-5 py-2 rounded-lg hover:bg-orange-600 hover:text-white duration-300"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/anikettikkal"
              target="_blank"
              className="bg-orange-600 px-5 py-2 rounded-lg hover:bg-orange-700 duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
