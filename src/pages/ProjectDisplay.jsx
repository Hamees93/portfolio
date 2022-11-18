import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} loading="lazy" />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <div style={{ display: "flex", alignItems: "center" }}>
        <a href={project.link} className="viewButton" target="blank">
          View Website
        </a>
        {project.git && project.git != "" && <GitHubIcon />}
      </div>
    </div>
  );
}

export default ProjectDisplay;
