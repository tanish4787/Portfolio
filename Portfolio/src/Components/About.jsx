import React from 'react';
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs,
  SiExpress, SiMongodb, SiTailwindcss, SiGit, SiGithub
} from 'react-icons/si';
import about from '../assets/images/about.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const About = () => {
  const skills = [
    { name: 'HTML', icon: <SiHtml5 className="text-orange-600" /> },
    { name: 'CSS', icon: <SiCss3 className="text-blue-600" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
    { name: 'React', icon: <SiReact className="text-cyan-400" /> },
    { name: 'Node.js', icon: <SiNodedotjs className="text-green-600" /> },
    { name: 'Express', icon: <SiExpress className="text-gray-600 dark:text-gray-200" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-700" /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss className="text-teal-400" /> },
    { name: 'Git', icon: <SiGit className="text-red-500" /> },
    { name: 'GitHub', icon: <SiGithub className="text-gray-800 dark:text-white" /> },
  ];

  return (
    <section
      id="about"
      className="w-full py-20 px-6 bg-[#f9feff] dark:bg-[#0f172a] text-gray-900 dark:text-white transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-16">

        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          
          <div className="md:w-1/2 w-full">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 border-b-4 border-blue-500 inline-block pb-2">
              About Me
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              I specialize in building scalable web applications using modern technologies like React, Node.js, and MongoDB.
              I’m passionate about writing clean, efficient code and turning ideas into interactive, user-friendly digital
              experiences. I'm actively seeking opportunities to contribute to impactful projects and grow with a forward-thinking
              development team.
            </p>
          </div>

          <div className="md:w-1/2 w-full flex justify-center md:justify-end">
            <img
              src={about}
              alt="Tanish Kaloiya"
              className="w-64 h-64 sm:w-72 sm:h-72 rounded-2xl bg-transparent dark:border-none object-center object-contain"
            />
          </div>
        </div>

        <div className="w-full">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 800,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
          >
            {skills.map((skill, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center justify-center px-4 py-4 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-none hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl mb-2">{skill.icon}</div>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{skill.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default About;
