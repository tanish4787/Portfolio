import React, { useState, useEffect } from 'react';
import { MdLightMode, MdOutlineLightMode } from 'react-icons/md';
import { HiMenu, HiX } from 'react-icons/hi'
import { toggleTheme } from '../utils/utility'

const Navbar = () => {
  const [theme, setTheme] = useState('light');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleThemeToggle = () => {
    toggleTheme();
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="w-full bg-[#f1f5ff] dark:bg-[#111827] shadow-md border-b border-gray-200 dark:border-gray-700 fixed top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">

        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white tracking-wide">
          Tanish Kaloiya
        </h1>

        <ul className="hidden md:flex items-center gap-8 text-lg font-medium text-gray-700 dark:text-gray-200">
          <a href="#home"><li className="hover:text-violet-600 cursor-pointer transition">Home</li></a>
          <a href="#about"><li className="hover:text-violet-600 cursor-pointer transition">About</li></a>
          <a href="#projects"><li className="hover:text-violet-600 cursor-pointer transition">Projects</li></a>
          <a href="#contact"><li className="hover:text-violet-600 cursor-pointer transition">Contact</li></a>
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={handleThemeToggle}
            className="text-2xl text-gray-700 dark:text-gray-200 hover:text-violet-600 transition outline-none"
          >
            {theme === 'dark' ? <MdOutlineLightMode /> : <MdLightMode />}
          </button>

          <button
            className="md:hidden text-3xl text-gray-700 dark:text-gray-200"
            onClick={toggleMenu}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {menuOpen && (
          <ul className="absolute top-full left-0 w-full bg-[#f1f5ff] dark:bg-[#111827] flex flex-col items-start px-6 py-4 gap-4 text-lg font-medium text-gray-700 dark:text-gray-200 md:hidden shadow-md border-t border-gray-200 dark:border-gray-700">
            <a href="#home" onClick={() => setMenuOpen(false)}>
              <li className="hover:text-violet-600 cursor-pointer transition">Home</li>
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              <li className="hover:text-violet-600 cursor-pointer transition">About</li>
            </a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              <li className="hover:text-violet-600 cursor-pointer transition">Projects</li>
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              <li className="hover:text-violet-600 cursor-pointer transition">Contact</li>
            </a>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
