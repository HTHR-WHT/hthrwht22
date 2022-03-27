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

/* MUI styles */
const useStyles = makeStyles((theme) => {
  return {
    toolbar: theme.mixins.toolbar,
  };
});

const Skills = () => {
  const skillClass = useStyles();
  return (
    <>
      <Container>
        <div className={skillClass.toolbar}></div>
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
    </>
  );
};

export default Skills;
