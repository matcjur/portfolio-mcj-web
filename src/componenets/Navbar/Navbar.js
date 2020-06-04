import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import "./style.scss";

export default class Navbar extends Component {
  state = {
    toggle: false,
  };
  toggleNav = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };
  renderPaths = () => {
    const links = this.props.paths;
    return links.map((path) => {
      const pathString = `/${path}`;
      return (
        <NavLink
          key={path}
          to={pathString}
          activeClassName="active-link"
          className="nav-item"
        >
          {path}
        </NavLink>
      );
    });
  };
  render() {
    // console.log(this.props.paths);
    return (
      <header className="container header">
        <div className="top">
          <div className="brand">
            <NavLink to="/" exact>
              {this.props.brand}
            </NavLink>
          </div>
          <div className="hamburger" onClick={this.toggleNav}>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </div>
        </div>
        <div className="bottom">
          <nav className={this.state.toggle ? "navbar" : "navbar-hidden"}>
            <NavLink
              to="/"
              activeClassName="active-link"
              exact
              className="nav-item"
            >
              Home
            </NavLink>
            {this.renderPaths()}
          </nav>
        </div>
      </header>
    );
  }
}
