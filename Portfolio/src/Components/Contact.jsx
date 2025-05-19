import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full min-h-screen px-6 py-16 bg-[#f9feff] dark:bg-[#0f172a] text-gray-800 dark:text-white"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        <div>
          <h2 className="text-3xl font-bold mb-6 border-b-4 border-blue-500 inline-block pb-2">Let’s Connect</h2>

          <form
            action="https://formspree.io/f/mldbzkog"
            method="POST"
            className="space-y-6"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_redirect" value="http://localhost:5173/thank-you" />

            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-slate-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-slate-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              name="message"
              rows="4"
              required
              placeholder="Message"
              className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-slate-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6 border-b-4 border-blue-500 inline-block pb-2">Alternate Contact</h2>

          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <div>
              <h4 className="text-lg font-semibold">Email</h4>
              <p className="mt-1 break-words">tanish4787@gmail.com</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold">Socials</h4>
              <div className="flex items-center gap-6 mt-2 text-2xl">
                <a
                  href="https://www.linkedin.com/in/tanish-kaloiya"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://github.com/tanish4787"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
