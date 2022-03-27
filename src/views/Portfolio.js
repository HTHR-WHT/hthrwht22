import { React, useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import allProjects from "../data/projects.js";
import ProjectCard from "../components/ProjectCard";

/* MUI styles */
const useStyles = makeStyles((theme) => {
  return {
    toolbar: theme.mixins.toolbar
}});

/* COMPONENT */
const Portfolio = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    setProjects(allProjects);
  }, []);

  if (projects === [] || projects === null) {
    return (
      <>
        <Container>
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
        <div className={classes.toolbar}></div>

          <Grid container spacing={3}>
            {projects.map((project) => (
              <Grid item key={project.name} xs={12} md={6} lg={4}>
                <ProjectCard project={project} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </>
    );
  }
};

export default Portfolio;

