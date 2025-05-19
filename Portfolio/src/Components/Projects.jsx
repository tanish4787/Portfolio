import React from 'react';
import ProjectCard from './ProjectCard';
import TaskManager from '../assets/images/taskmanager.png';
import WorldAtlas from '../assets/images/World-Atlas.png';
import CodeBot from '../assets/images/CodeBot.png';
import XcelUrCareer from '../assets/images/XcelUrCareer.png';
import CardProp from '../assets/images/CardProp.png';
import WeatherApp from '../assets/images/WeatherApp.png';
import BMICalc from '../assets/images/BMICalc.png';

import { v4 as uuidv4 } from 'uuid';

const projectList = [
  {
    id: uuidv4(),
    image: TaskManager,
    heading: 'Task Manager',
    description: 'A simple and responsive task management web app that allows users to add, mark as complete, and delete tasks. It uses React hooks and localStorage for persistent state across sessions, with a clean UI styled using Tailwind CSS.',
    techStack: ['React', 'Tailwind CSS', 'JavaScript'],
    live: 'https://taskmanager-nu-two.vercel.app/',
    code: 'https://github.com/tanish4787/TaskManager',
  },

  {
    id: uuidv4(),
    image: XcelUrCareer,
    heading: 'Online Courses Library',
    description: 'An EdTech website built using pure HTML, CSS, and JavaScript. Features include interactive CTA buttons, smooth hover effects, and responsive Login/Signup modals — all without using any frameworks or libraries.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://xcelurcareer.netlify.app/',
    code: 'https://github.com/tanish4787/Xcelurcareer',
  },

  {
    id: uuidv4(),
    image: CodeBot,
    heading: 'CodeBot',
    description: 'A clean and modern landing page introducing CodeBot, an AI-powered coding assistant designed to help developers write, debug, and understand code faster. The interface is minimalistic and professional, with a clear call to action and responsive layout.',
    techStack: ['React', 'Tailwind CSS', 'JavaScript'],
    live: 'https://code-bot-nu.vercel.app/',
    code: 'https://github.com/tanish4787/World-Atlas',
  },
  {
    id: uuidv4(),
    image: WorldAtlas,
    heading: 'Atlas Site',
    description: 'A responsive and visually appealing atlas website that showcases geographic locations with useful information for tourists, including population size, currency, and continent data.',
    techStack: ['React-hooks', 'Tailwind CSS', 'JavaScript'],
    live: 'https://worldatlasforall.netlify.app/',
    code: 'https://github.com/tanish4787/World-Atlas',
  },

  {
    id: uuidv4(),
    image: WeatherApp,
    heading: 'Weather App ',
    description: 'Built with React and basic stylings to practice react Props and API integration concept Fetching Weather from an external API to get data and Updating UI on frontend using STATES in React Js.',
    techStack: ['React', 'Tailwind CSS'],
    live: 'https://cardprop.netlify.app/',
    code: 'https://github.com/tanish4787/Weather-App',
  },

  {
    id: uuidv4(),
    image: CardProp,
    heading: 'Card Prop Feature ',
    description: 'Built with React and basic stylings to practice react Props and API integration concept.',
    techStack: ['React', 'Tailwind CSS'],
    live: 'https://cardprop.netlify.app/',
    code: 'https://github.com/your-repo',
  },

  {
    id: uuidv4(),
    image: BMICalc,
    heading: 'Basic BMI Calculator ',
    description: 'Basic BMI Calculator built with React to practice States and Hooks Concept.',
    techStack: ['React'],
    live: 'https://bmicalc9918.netlify.app/',
    code: 'https://github.com/tanish4787/BMI-CALCULATOR',
  },

];

const Projects = () => {
  return (
    <section
      className="w-full py-20 px-6 bg-[#f9feff] dark:bg-[#0f172a] text-gray-900 dark:text-white transition-colors duration-300"
      id='projects'
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-10 border-b-4 border-blue-500 inline-block pb-2">
          Projects
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
