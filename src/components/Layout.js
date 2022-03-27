import React from "react";
import { makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import ToolBar from "@mui/material/Toolbar";
import NavBar from "./NavBar";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
    },
    view: {
      background: "#f9f9f9",
      width: "100%",
      minHeight: "100vh",
    },
    toolbar: theme.mixins.toolbar,
  };
});

const Layout = ({ children }) => {
  const layoutClass = useStyles();
  return (
    <div>
      <AppBar elevation={0}>
        <ToolBar className={layoutClass.root}>
          <NavBar />
        </ToolBar>
      </AppBar>
      <div className={layoutClass.view}>
        <div className={layoutClass.toolbar}></div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
