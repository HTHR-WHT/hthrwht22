import { React, useState, useEffect } from "react";
// import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Navbar from "../components/NavBar";
import allProjects from "../data/projects.js";

/* MUI styles */
// const useStyles = makeStyles({
//   screenCap: {
//     width: 200,
//   },
// });

/* COMPONENT */
const Portfolio = () => {
  // const portClass = useStyles();

  const [projects, setProjects] = useState(null);

  useEffect(() => {
    setProjects(allProjects);
  }, []);

  if (projects === [] || projects === null) {
    return (
      <>
        <Container>
          <Navbar />
          <Typography variant="h4" align="center" gutterBottom>
            hang tight...fetching projects
          </Typography>
        </Container>
      </>
    );
  } else {
    return (
      <>
        <Container>
          <Navbar />
          {projects.map((project) => (
            <div key={project.name}>
              <Typography variant="h5">{project.name}</Typography>
              <div>
                <img
                  // className={portClass.screenCap}
                  src={`${project.image}`}
                  alt={`Screen capture of ${project.name}`}
                />
              </div>
              <div>
                <Typography>{project.description}</Typography>
                <Typography>Tech Stack: {project.tech}</Typography>
                <div>
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
        </Container>
      </>
    );
  }
};

export default Portfolio;
