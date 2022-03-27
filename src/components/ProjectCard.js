import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const ProjectCard = ({ project }) => {
  return (
    <div>
      <Card elevation={3}>
        <CardHeader
          action={
            <a
              href={`https://github.com/${project.repo}`}
              target="_blank"
              rel="noreferrer"
            >
              <IconButton>
                <GitHubIcon fontSize="large" />
              </IconButton>
            </a>
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
