import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectCard = ({ image, heading, description, techStack, live, code }) => {
  return (
    <div className="bg-[#f1f5ff] dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl group">

      <div className="overflow-hidden h-48">
        <img
          src={image}
          alt={heading}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="p-5">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{heading}</h2>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{description}</p>

        <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Tech Stack:</h3>
        <ul className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <li
              key={index}
              className="text-xs bg-blue-100 dark:bg-blue-600 text-blue-800 dark:text-white px-2 py-1 rounded"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          <a
            href={live}
            target="_blank"
            className="text-blue-600 dark:text-blue-400 flex items-center gap-1 text-sm font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
          >
            Live <FaExternalLinkAlt />
          </a>
          <a
            href={code}
            target="_blank"
            className="text-blue-600 dark:text-blue-400 flex items-center gap-1 text-sm font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
          >
            Code <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
