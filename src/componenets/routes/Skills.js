import React, { Component } from "react";

class Skills extends Component {
  render() {
    return (
      <div className="container skills-container ">
        <h1 className="skills-header">Here are my Skills</h1>
        <div className="skills">
          <ul className="bullet-list shadow">
            <h2>Core Tech</h2>
            <li>HTML 5</li>
            <li>CSS 3</li>
            <li>JavaScript</li>
            <li>MongoDB</li>
            <li>Rest API</li>
          </ul>
          <ul className="bullet-list shadow">
            <h2>Frameworks and libraries</h2>
            <li>React</li>
            <li>Redux</li>
            <li>Bootstrap</li>
            <li>Express.js</li>
            <li>Mongoose</li>
          </ul>
          <ul className="bullet-list shadow">
            <h2>Tools</h2>
            <li>Linux - Manjaro</li>
            <li>Chrome Developer Tools</li>
            <li>Firefox Developer Tools</li>
            <li>VS Code</li>
            <li>Redux DevTools</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Skills;
