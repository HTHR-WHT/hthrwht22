import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Link from "@mui/material/Link";
import { Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import YouTubeIcon from "@mui/icons-material/YouTube";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";

/* expand card helper function! thanks MUI docs :) */
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

/* COMPONENT */
const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

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
              <IconButton aria-label="github repo link">
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
        <CardActions disableSpacing>
          <IconButton aria-label="project demo link">
            {`${project.link}` === "youtube" ? (
              <Link href={project.path} target="_blank">
                <YouTubeIcon fontSize="large" color="action" />
              </Link>
            ) : (
              <Link href={project.path} target="_blank">
                <OpenInBrowserIcon fontSize="large" color="action" />
              </Link>
            )}
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpand}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography sx={{ fontWeight: "bold" }}>Tech Stack:</Typography>
            <Typography paragraph>{project.tech}</Typography>
            <Typography sx={{ fontWeight: "bold" }}>Contributions:</Typography>
            <Typography paragraph>{project.work}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};

export default ProjectCard;
