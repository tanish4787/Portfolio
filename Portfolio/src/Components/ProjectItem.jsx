import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectItem = ({
  image,
  heading,
  description,
  techStack,
  live,
  code,
}) => {
  return (
    <ProjectCard
      image={image}
      heading={heading}
      description={description}
      techStack={techStack}
      live={live}
      code={code}
    />
  );
};

export default ProjectItem;
