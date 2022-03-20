/*
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProjects, deleteProject } from "../redux/projects";

export class AllProjects extends React.Component {
  componentDidMount() {
    this.props.getProjects();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.projects.length !== this.props.projects.length) {
      this.props.getProjects();
    }
  }
  render() {
    const projects = this.props.projects;
    if (projects === [] || projects === undefined) {
      return (
        <div>
          <br />
          <h1>There are no robots currently registered in the database.</h1>
          <br />
          <Link id="addButton" to={"/addProject"}>
            <button type="submit">Add Project</button>
          </Link>
          <br />
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <Link id="addButton" to={"/addProject"}>
            <button type="submit">Add Project</button>
          </Link>
          <br />
          {projects.map((project) => {
            return (
              <div className="container border" key={project.id}>
                <br />
                <Link to={`/projects/${project.id}`}>
                  <h2>{project.title}</h2>
                </Link>
                <div className="projectDetails">
                  <h4>Deadline: {project.deadline.slice(0, 10)}</h4>
                  <p>Description: {project.description}</p>
                </div>
                <form onSubmit={(event) => event.preventDefault()}>
                  <button
                    type="submit"
                    className="deleteButton"
                    onClick={() => this.props.deleteProject(project.id)}
                  >
                    Delete Project
                  </button>
                </form>
                <br />
              </div>
            );
          })}
          <br />
        </div>
      );
    }
  }
}
*/