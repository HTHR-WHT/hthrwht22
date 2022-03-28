import React from "react";
import { makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import ToolBar from "@mui/material/Toolbar";
import NavBar from "./NavBar";

const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: "#f9f9f9",
      width: "100%",
      minHeight: "100vh",
    },
    toolbar: theme.mixins.toolbar,
  };
});

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      <AppBar sx={{ bgcolor: "#f9f9f900", mt: "1.1rem" }} elevation={1}>
        <ToolBar>
          <NavBar />
        </ToolBar>
      </AppBar>
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
