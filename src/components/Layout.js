import React from "react";
import { makeStyles } from "@mui/styles";
import NavBar from "./NavBar";

const useStyles = makeStyles(() => {
  return {
    page: {
      width: "100%",
      minHeight: "100vh",
    },
  };
});

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      <NavBar />
      <div className={classes.page}>{children}</div>
    </div>
  );
};

export default Layout;
