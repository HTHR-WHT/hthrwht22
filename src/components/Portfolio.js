import { React, useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import Navbar from "./NavBar";
import allProjects from "../seed/projects";

const Portfolio = () => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    setProjects(allProjects);
  }, []);

  if (projects === [] || projects === null) {
    return (
      <>
        <p>hang tight...fetching projects</p>
      </>
    );
  } else {
    return (
      <>
        <Navbar />
        {projects.map((project) => (
          <div className="projectContainer" key={project.name}>
            <div className="containerLeft">
              <img
                src={`${project.image}`}
                alt={`Screen capture of ${project.name}`}
              />
            </div>
            <div className="containerRight">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p>Tech Stack: {project.tech}</p>
              <a
                href={`https://github.com/${project.repo}`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={project.github}
                  alt="Link to github repo."
                />
              </a>
              <a
                href={`${project.path}`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={project.link}
                  alt="Link to project demo."
                />
              </a>
            </div>
          </div>
        ))}
      </>
    );
  }
};

export default Portfolio;


