/*
create a container for background image
nav component
containers for tech skills, transferrable skills, my key vals, my interests/loves
gray portrait
image of resume
download resume pdf link
*/
import React from "react";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import { topSkills, medSkills, softSkills } from "../data/resumeSkills";
import skillLg from "../assets/desktop_portfolio.png";

/* MUI styles */
const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("xs")]: {
      minHeight: "100vh",
      backgroundImage: `url(${skillLg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
    marginTop: "-4.2rem",
  },
  toolbar: theme.mixins.toolbar,
}));

const Skills = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.toolbar}></div>
        <div>
          <Typography variant="h5">Technical Skills</Typography>
          <Typography variant="h6">Proficient:</Typography>
          <ul>
            {topSkills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
          <Typography variant="h6">Knowledgeable:</Typography>
          <ul>
            {medSkills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
        <div>
          <Typography variant="h5">Transferrable Skills</Typography>
          <ul>
            {softSkills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Skills;
