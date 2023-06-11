import React from "react";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import { Paper, Divider, Typography, Button } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import TerminalIcon from "@mui/icons-material/Terminal";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import GroupsIcon from "@mui/icons-material/Groups";
import skillLg from "../assets/desktop_portfolio.png";
import resume from "../assets/HeatherWhite_Resume_04_22.pdf";
import {
  creativeSkills,
  topTechSkills,
  professionalAssets,
} from "../data/resumeSkills";

/* MUI styles */
const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("xs")]: {
      minHeight: "100vh",
      paddingBottom: "1vh",
      backgroundImage: `url(${skillLg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center center",
    },
    marginTop: "-6.5rem",
  },
  buttonBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    maxWidth: "80vw",
    minHeight: "100px",
    margin: ".5rem auto 0 auto",
  },
  paper: {
    minHeight: "calc(100vh - 10rem)", // Adjust this line as needed
    width: "100%",
    maxWidth: "100vw",
    margin: "1.5rem auto",
    overflow: "hidden", // Added this line
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    height: "100%", // Add this line
    marginBottom: "1rem", // Added this line
    padding: "0",
  },
  box: {
    minHeight: "80vh",
    maxWidth: "25vw",
    flexGrow: "1",
    marginBottom: ".5rem", // Added this line
  },
  listItem: {
    display: "flex", // Added this line
    flexDirection: "column",
    justifyContent: "flex-start", // Modified this line
    alignItems: "center", // Added this line
    minHeight: "-20%", // Adjust this line as needed
    padding: "0", // Added this line
  },
}));

const Skills = () => {
  const classes = useStyles();

  const onDownload = () => {
    const link = document.createElement("a");
    link.download = resume;
    link.href = `${resume}`;
    link.click();
  };

  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.buttonBox}>
          <Button color="secondary" onClick={onDownload} variant="contained">
            Download My Resume
          </Button>
        </div>
        <Paper className={classes.paper} elevation={3}>
          <List className={classes.container}>
            <div className={classes.box} aria-label="creative skills list">
              <ListItem className={classes.listItem}>
                <ListItemIcon aria-label="palette icon">
                  <ColorLensIcon
                    sx={{
                      color: "#7b68ee",
                      fontSize: 45,
                      marginBottom: "0",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="CREATIVE"
                  primaryTypographyProps={{
                    fontFamily: "Raleway",
                    fontWeight: "700",
                    marginBottom: "-.5rem",
                  }}
                />
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemText
                  secondary={
                    <Typography
                      variant="body1"
                      align="center"
                      marginBottom=".5rem"
                      fontSize="14px"
                    >
                      I am a studio trained artist that values simple,
                      thoughtful design that's delightful and tells a story with
                      ease.
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemText
                  primary="TOOLS"
                  primaryTypographyProps={{
                    fontFamily: "Raleway",
                    fontWeight: "700",
                    color: "#7b68ee",
                  }}
                />
              </ListItem>
              {creativeSkills.map((skill) => (
                <ListItem key={skill}>
                  <ListItemText
                    secondary={
                      <Typography
                        variant="body2"
                        align="center"
                        marginTop={"-1rem"}
                      >
                        {skill}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </div>

            <Divider orientation="vertical" flexItem variant="middle" />

            <div className={classes.box} aria-label="technical skills list">
              <ListItem className={classes.listItem}>
                <ListItemIcon aria-label="terminal icon">
                  <TerminalIcon
                    sx={{
                      color: "#7b68ee",
                      fontSize: 45,
                      marginBottom: "0",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="TECHNICAL"
                  primaryTypographyProps={{
                    fontFamily: "Raleway",
                    fontWeight: "700",
                    marginBottom: "-.5rem",
                  }}
                />
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemText
                  secondary={
                    <Typography
                      variant="body1"
                      align="center"
                      marginBottom=".5rem"
                      fontSize="14px"
                    >
                      I am a full stack software engineer that enjoys the
                      creative magic of the front-end and organized structure of
                      the back-end.
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemText
                  primary="SKILLS"
                  primaryTypographyProps={{
                    fontFamily: "Raleway",
                    fontWeight: "700",
                    color: "#7b68ee",
                  }}
                />
              </ListItem>
              {topTechSkills.map((skill) => (
                <ListItem key={skill} className={classes.listItem}>
                  <ListItemText
                    secondary={
                      <Typography
                        variant="body2"
                        align="center"
                        marginTop={"-1rem"}
                      >
                        {skill}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </div>

            <Divider orientation="vertical" flexItem variant="middle" />

            <div className={classes.box} aria-label="professional skills list">
              <ListItem className={classes.listItem}>
                <ListItemIcon aria-label="groups icon">
                  <GroupsIcon
                    sx={{
                      color: "#7b68ee",
                      fontSize: 45,
                      marginBottom: "0",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="PROFESSIONAL"
                  primaryTypographyProps={{
                    fontFamily: "Raleway",
                    fontWeight: "700",
                    marginBottom: "-.5rem",
                  }}
                />
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemText
                  secondary={
                    <Typography
                      variant="body1"
                      align="center"
                      marginBottom=".5rem"
                      fontSize="14px"
                    >
                      I am a reliable collaborator with 7 years of experience
                      planning, organizing, and meeting deadlines on large scale
                      productions.
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemText
                  primary="ASSETS"
                  primaryTypographyProps={{
                    fontFamily: "Raleway",
                    fontWeight: "700",
                    color: "#7b68ee",
                  }}
                />
              </ListItem>
              {professionalAssets.map((skill) => (
                <ListItem key={skill} className={classes.listItem}>
                  <ListItemText
                    secondary={
                      <Typography
                        variant="body2"
                        align="center"
                        marginTop={"-1rem"}
                      >
                        {skill}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </div>
          </List>
        </Paper>
      </Container>
    </div>
  );
};

export default Skills;
