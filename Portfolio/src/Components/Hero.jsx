import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profile from '../assets/user.jpg';
import Tanish_Fullstack_Dev from '../assets/pdf/Tanish_Fullstack_Dev.pdf';

const Hero = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 bg-[#f9feff] dark:bg-[#111827] transition-colors duration-300"
      id="home"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">

        <div className="flex-shrink-0">
          <img
            src={profile}
            alt="Tanish Kaloiya"
            className="w-64 h-64 sm:w-72 sm:h-72 md:w-100 md:h-100 object-cover rounded-2xl shadow-lg border border-gray-200 dark:border-none"
          />
        </div>

        <div className="text-center md:text-left flex-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Hi, I’m <span className="text-blue-600">Tanish Kaloiya</span>
          </h1>

          <div className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 px-2 sm:px-0">
            <div className="mt-2">
              <p>
                I'm a passionate <span className="text-blue-600 dark:text-blue-400 font-semibold">Full Stack Developer</span> who thrives on building real-world projects. I believe in writing clean, maintainable code and constantly learning to stay ahead in the tech world.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center md:justify-start">
            <a href="#projects">
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-sm transition">
                View Projects
              </button>
            </a>

            <a href={Tanish_Fullstack_Dev} download="Tanish_Fullstack_Dev">
              <button className="px-6 py-2 border border-blue-500 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-800 rounded-md transition">
                Download Resume
              </button>
            </a>
          </div>

          <div className="flex gap-6 justify-center md:justify-start text-2xl text-gray-600 dark:text-gray-300">
            <a
              href="https://github.com/tanish4787"
              target="_blank"
              className="hover:text-blue-600 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/tanish-kaloiya"
              target="_blank"
              className="hover:text-blue-600 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
