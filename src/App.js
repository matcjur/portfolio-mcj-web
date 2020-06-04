import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./componenets/routes/Home";
import About from "./componenets/routes/About";
import Contact from "./componenets/routes/Contact";
import Projects from "./componenets/routes/Projects";
import Skills from "./componenets/routes/Skills";
import Navbar from "./componenets/Navbar/Navbar";

import "./reset.css";
import "./styles.scss";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar
          brand="MCJ-Web"
          paths={["about", "skills", "projects", "contact"]}
        ></Navbar>
        <Route path="/" component={Home} exact></Route>
        <Route path="/projects" component={Projects}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/skills" component={Skills}></Route>
      </BrowserRouter>
    );
  }
}
