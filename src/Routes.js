/*
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";

import AllProjects from "./components/AllProjects";
import SingleProject from "./components/SingleProject";
import LandingPage from "./components/LandingPage";
import Resume from "./components/Resume";



 const Routes = () => {
  
    render() {  
      return (
        <>
            <Switch>
              <Route path="/" exact component={LandingPage} />
              <Route exact path="/projects" component={Allprojects} />
              <Route path="/projects/:id" component={SingleProject} />
              <Route exact path="/resume" component={Resume} />
            </Switch>
        </>
      );
    }
  }
  
  // The `withRouter` wrapper makes sure that updates are not blocked
  // when the url changes
  export default withRouter(connect(mapState, mapDispatch)(Routes));
*/