/*
containers for tech skills, transferrable skills, my key vals, my interests/loves
download resume pdf link
*/
import React from "react";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import { Paper, Divider, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import TerminalIcon from "@mui/icons-material/Terminal";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import GroupsIcon from "@mui/icons-material/Groups";
import skillLg from "../assets/desktop_portfolio.png";
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
      backgroundImage: `url(${skillLg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
    marginTop: "-3.7rem",
  },
  toolbar: theme.mixins.toolbar,
  paper: {
    // flexDirection: "column",
    // justifyContent: "space-evenly",
    minHeight: "80vh",
    width: "100%",
    maxWidth: "80vw",
    margin: "0 auto",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  box: {
    // minHeight: "80vh",
    minHeight: "80vh",
    // minWidth: "375px",
    maxWidth: "24vw",
    flexGrow: "1",
  },
  // listHeader: {
  //   flexDirection: "column",
  //   justifyContent: "center",
  // },
  listItem: {
    // display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // flex: "1 26%",
    // flexGrow: "3",
  },
}));

const Skills = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <div className={classes.toolbar}></div>
        <Paper className={classes.paper} elevation={3}>
          <List className={classes.container}>
            <div className={classes.box} aria-label="creative skills list">
              <ListItem className={classes.listItem}>
                <ListItemIcon aria-label="palette icon">
                  <ColorLensIcon
                    sx={{
                      color: "#7b68ee",
                      fontSize: 50,
                      marginBottom: ".5rem",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="CREATIVE"
                  primaryTypographyProps={{
                    fontFamily: "Raleway",
                    fontWeight: "700",
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
                      fontSize: 50,
                      marginBottom: ".5rem",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="TECHNICAL"
                  primaryTypographyProps={{
                    fontFamily: "Raleway",
                    fontWeight: "700",
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
                      fontSize: 50,
                      marginBottom: ".5rem",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="PROFESSIONAL"
                  primaryTypographyProps={{
                    fontFamily: "Raleway",
                    fontWeight: "700",
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
