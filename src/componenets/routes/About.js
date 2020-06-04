import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Comments extends Component {
  render() {
    return (
      <div className="container about">
        <div className="shadow">
          <h1>I am Matheus Cordeiro Jurgensen,</h1>
          <h2>a sofware developer</h2>
          <p>
            Hello, I am Matheus C. Jurgensen, a software developer based in
            Brazil. I have both sides of development, Back End and Front End,
            under my belt, which means I will be able to provide tailor made
            custom solutions for whatever challenge you might be facing.
          </p>
          <p>
            My main stack is JavaScript based with React for Front End and
            Node.js for backend, though I am always looking to learn new
            technologies or techniques. You can check out my skills and tools{" "}
            <Link to="/Skills">here</Link>.
          </p>
          <p>
            Whether you need a simple page, a single page application, a custom
            server or API consumption, I am your man. To contact me, just click{" "}
            <Link className="click-me" to="/contact">
              here
            </Link>
            .
          </p>
        </div>
      </div>
    );
  }
}
