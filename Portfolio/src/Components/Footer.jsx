import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
     className="bg-[#f1f5ff] dark:bg-[#0f172a] text-gray-700 dark:text-gray-300 py-6 mt-0 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <p className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} <span className="font-medium">Tanish Kaloiya</span>. All rights reserved.
        </p>
        
        <div className="flex gap-5 text-xl">
          <a
            href="https://www.linkedin.com/in/tanish-kaloiya"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/tanish4787"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
