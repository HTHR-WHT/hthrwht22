/*
containers for tech skills, transferrable skills, my key vals, my interests/loves
download resume pdf link
*/
import React from "react";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import { Paper, Divider } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import TerminalIcon from "@mui/icons-material/Terminal";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import GroupsIcon from "@mui/icons-material/Groups";
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
  paper: {
    display: "flex",
    justifyContent: "space-evenly",
    minHeight: "80vh",
  },
  list: {
    display: "flex",
    justifyContent: "space-evenly"
  },
  listHeader: {
    flexDirection: "row",
    justifyContent: "center",
  },
  listItem: {
    flexDirection: "column",
    alignContent: "center",
  },
}));

const Skills = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <div className={classes.toolbar}></div>
        <Paper className={classes.paper} elevation={3}>
          <List className={classes.list}>
            <div aria-label="creative skills list">
              <ListItem className={classes.listHeader}>
                <ListItemIcon aria-label="palette icon">
                  <ColorLensIcon fontSize="large" sx={{ color: "black" }} />
                </ListItemIcon>
                <ListItemText primary="CREATIVE" />
              </ListItem>
            </div>

            <Divider orientation="vertical" flexItem variant="middle" />
            <div aria-label="technical skills list">
              <ListItem className={classes.listHeader}>
                <ListItemIcon aria-label="terminal icon">
                  <TerminalIcon fontSize="large" sx={{ color: "black" }} />
                </ListItemIcon>
                <ListItemText primary="TECHNICAL" />
              </ListItem>
            </div>

            <Divider orientation="vertical" flexItem variant="middle" />
            <div aria-label="professional skills list">
              <ListItem className={classes.listHeader}>
                <ListItemIcon aria-label="groups icon">
                  <GroupsIcon fontSize="large" sx={{ color: "black" }} />
                </ListItemIcon>
                <ListItemText primary="PROFESSIONAL" />
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
