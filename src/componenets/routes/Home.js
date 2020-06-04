import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <ul className="calls-to-action container">
        <li className="path-to-route">
          <Link to="/About">About</Link>
        </li>
        <li className="path-to-route">
          <Link to="/Projects">Projects</Link>
        </li>
        <li className="path-to-route">
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    );
  }
}
