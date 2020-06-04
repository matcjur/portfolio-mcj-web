import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div className="container contact">
        <div className="shadow">
          <h1>Here is how to get a hold of me</h1>
          <div className="email">
            <h2>
              Email:
              <a href="mailto: matheus@mcj-web.com" target="_blank">
                matheus@mcj-web.com
              </a>
            </h2>
          </div>
        </div>
      </div>
    );
  }
}
