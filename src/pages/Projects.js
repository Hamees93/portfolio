import React from "react";
import AnimatedPage from "../components/AnimatedPage";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";

import "../styles/Projects.css";

function Projects() {
  return (
    <AnimatedPage>
      <div className="projects">
        <h1> My Personal Projects</h1>
        <div className="projectList">
          {ProjectList.map((project, idx) => {
            return (
              <ProjectItem
                key={idx}
                id={idx}
                name={project.name}
                image={project.image}
              />
            );
          })}
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Projects;
