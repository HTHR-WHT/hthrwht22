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
// import { WrapText } from "@mui/icons-material";

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
  paper: {
    // flexDirection: "column",
    // justifyContent: "space-evenly",
    minHeight: "80vh",
    width: "100%",
    maxWidth: "1536px",
    margin: "0 auto",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",

    // justifyContent: "space-evenly",
  },
  box: {
    // minHeight: "80vh",
    minHeight: "80vh",
    // minWidth: "375px",
    maxWidth: "384px",
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
                  <ColorLensIcon sx={{ color: "black", fontSize: 50 }} />
                </ListItemIcon>
                <ListItemText primary="CREATIVE" />
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemText
                  secondary={
                    <Typography variant="body1">
                      Do you have Paris recommendations?
                    </Typography>
                  }
                />
              </ListItem>
            </div>

            <Divider orientation="vertical" flexItem variant="middle" />

            <div className={classes.box} aria-label="technical skills list">
              <ListItem className={classes.listItem}>
                <ListItemIcon aria-label="terminal icon">
                  <TerminalIcon sx={{ color: "black", fontSize: 50 }} />
                </ListItemIcon>
                <ListItemText primary="TECHNICAL" />
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemText
                  secondary={
                    <Typography variant="body1">
                      Do you have Paris recommendations? Have you ever…been to
                      Mars this time of year? I hear it's lovely...
                    </Typography>
                  }
                />
              </ListItem>
            </div>

            <Divider orientation="vertical" flexItem variant="middle" />

            <div className={classes.box} aria-label="professional skills list">
              <ListItem className={classes.listItem}>
                <ListItemIcon aria-label="groups icon">
                  <GroupsIcon sx={{ color: "black", fontSize: 50 }} />
                </ListItemIcon>
                <ListItemText primary="PROFESSIONAL" />
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemText
                  secondary={
                    <Typography variant="body1">
                      Do you have Paris recommendations? Have you ever
                      manifested all of your dreams?
                    </Typography>
                  }
                />
              </ListItem>
            </div>
          </List>
          {/* <Typography variant="h5">Creative</Typography>
          <Divider orientation="vertical" flexItem="true" variant="middle" />
          <Typography variant="h5">Technical</Typography>
          <Divider orientation="vertical" flexItem="true" variant="middle" />
          <Typography variant="h5">Professional</Typography> */}
        </Paper>
      </Container>
    </div>
  );
};

export default Skills;
