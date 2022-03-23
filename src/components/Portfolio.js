import { React, useState, useEffect } from "react";
import Navbar from "./NavBar";
import allProjects from "../projectData/projects.js";

const Portfolio = () => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    setProjects(allProjects);
  }, []);

  if (projects === [] || projects === null) {
    return (
      <>
        <div className="portfolio">
          <p>hang tight...fetching projects</p>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="portfolio">
          <Navbar />
          {projects.map((project) => (
            <div className="projectContainer" key={project.name}>
              <h1>{project.name}</h1>
              <div className="containerLeft">
                <img
                  src={`${project.image}`}
                  alt={`Screen capture of ${project.name}`}
                />
              </div>
              <div className="containerRight">
                <p>{project.description}</p>
                <p>
                  <b>Tech Stack: </b>
                  {project.tech}
                </p>
                <div className="portfolioLogoLinks">
                  <a
                    href={`https://github.com/${project.repo}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={project.github} alt="Link to github repo." />
                  </a>
                  <a href={`${project.path}`} target="_blank" rel="noreferrer">
                    <img src={project.link} alt="Link to project demo." />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
};

export default Portfolio;
