/*
create a container for background image
nav component
containers for tech skills, transferrable skills, my key vals, my interests/loves
gray portrait
image of resume
download resume pdf link
*/
import React from "react";
import Typography from "@material-ui/core/Typography"
import Navbar from "../components/NavBar";
import {topSkills, medSkills, softSkills} from "../data/resumeSkills";

const Skills = () => {
    return (
        <>
          <div>
            <Navbar />
            <div>
              <Typography variant="h4">Technical Skills</Typography>
              <Typography variant="h5">Proficient:</Typography>
                <ul>
                    {topSkills.map((skill, i) => 
                        <li key={i} >{skill}</li>
                    )}
                </ul>
                <Typography variant="h5">Knowledgeable:</Typography>
                <ul>
                    {medSkills.map((skill, i) => 
                        <li key={i} >{skill}</li>
                    )}
                </ul>
            </div >
            <div>
            <Typography variant="h4">Transferrable Skills</Typography>
              <ul>
                {softSkills.map((skill, i) => 
                    <li key={i} >{skill}</li>
                )}
              </ul>
            </div >
          </div>
        </>
      );
  

  
};

export default Skills;
