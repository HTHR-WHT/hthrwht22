import { React, useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import allProjects from "../data/projects.js";
import ProjectCard from "../components/ProjectCard";
import portLg from "../assets/desktop_portfolio.png";

/* MUI styles */
const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("xs")]: {
      minHeight: "100vh",
      backgroundImage: `url(${portLg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
    marginTop: "-4.2rem",
  },
  toolbar: theme.mixins.toolbar,
}));

/* COMPONENT */
const Portfolio = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    setProjects(allProjects);
  }, []);

  if (projects === [] || projects === null) {
    return (
      <div className={classes.root}>
        <Container>
          <Typography variant="h4" align="center" mt="11rem" gutterBottom>
            hang tight...fetching projects
          </Typography>
        </Container>
      </div>
    );
  } else {
    return (
      <div className={classes.root}>
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
      </div>
    );
  }
};

export default Portfolio;
