import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";

const ProjectCard = ({ project }) => {
    let navigate = useNavigate();
  return (
    <div>
      <Card elevation={3}>
        <CardHeader
          action={
              //this navigate thing aint workin...le sigh
              <IconButton onClick={() => navigate(`https://github.com/${project.repo}`)}>
                <GitHubIcon />
              </IconButton>
          }
          title={project.name}
          subheader={project.type}
        />
        <CardMedia
          component="img"
          height="194"
          image={`${project.image}`}
          alt={`Screen capture of ${project.name}`}
        />
        <CardContent>
          <Typography variant="body1">{project.description}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectCard;
