import { loadTheme } from "./utils/utility";
loadTheme();

import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import ThankYou from "./Components/Thankyou";
import Footer from "./Components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);

  return (
    <div className="bg-[#f9feff] text-[#1f2937] dark:bg-[#111827] dark:text-gray-100 min-h-screen transition-colors duration-300 scroll-smooth pt-20">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Projects />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/thank-you"
          element={
            <>
              <ThankYou />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
