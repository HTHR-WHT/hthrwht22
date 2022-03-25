/*
create a container for background image
nav component
containers for tech skills, transferrable skills, my key vals, my interests/loves
gray portrait
image of resume
download resume pdf link
*/
import React from "react";
import Navbar from "./NavBar";
import {topSkills, medSkills, softSkills} from "../data/resumeSkills";

const Resume = () => {
    return (
        <>
          <div className="resume">
            <Navbar />
            <div className="top-skills">
              <h3>Technical Skills</h3>
              <h5>Proficient:</h5>
                <ul>
                    {topSkills.map((skill) => 
                        <li>{skill}</li>
                    )}
                </ul>
                <h5>Knowledgeable:</h5>
                <ul>
                    {medSkills.map((skill) => 
                        <li>{skill}</li>
                    )}
                </ul>
            </div >
            <div className="soft-skills">
              <h3>Transferrable Skills</h3>
              <ul>
                {softSkills.map((skill) => 
                    <li>{skill}</li>
                )}
              </ul>
            </div >
          </div>
        </>
      );
  

  
};

export default Resume;
