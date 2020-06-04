import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="card shadow">
        <h1>{this.props.name}</h1>
        <img src={this.props.image} alt="#" />
        <div className="buttons">
          <div>
            <a className="btn-github" href={this.props.github}>
              Github
            </a>
          </div>
          <div>
            <a className="btn-site" href={this.props.site}>
              Site
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
