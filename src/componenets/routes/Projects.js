import React, { Component } from "react";
import Card from "../Card/Card";
class Projects extends Component {
  state = {
    projects: [
      {
        name: "Project 1",
        image:
          "https://images.unsplash.com/photo-1550164682-2927e311a4fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjk5NTd9&auto=format&fit=crop&w=667&q=80",
        github: "#",
        site: "#",
      },
      {
        name: "Project 2",
        image:
          "https://images.unsplash.com/photo-1550164682-2927e311a4fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjk5NTd9&auto=format&fit=crop&w=667&q=80",
        github: "#",
        site: "#",
      },
      {
        name: "Project 3",
        image:
          "https://images.unsplash.com/photo-1550164682-2927e311a4fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjk5NTd9&auto=format&fit=crop&w=667&q=80",
        github: "#",
        site: "#",
      },
    ],
  };
  renderProjects = () => {
    return this.state.projects.map((project) => {
      return (
        <Card
          key={project.name}
          name={project.name}
          image={project.image}
          github={project.github}
          site={project.site}
        ></Card>
      );
    });
  };
  logState = () => {
    console.log(this.state);
  };
  render() {
    this.logState();
    return <div className="container projects">{this.renderProjects()}</div>;
  }
}

export default Projects;
