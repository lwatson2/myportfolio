import React, { Component } from "react";
import "./Homepage.css";

export default class Homepage extends Component {
  render() {
    return (
      <div className="homepageWrapper">
        <div className="testwrapper">
          <h1 className="testText">
            Hi, I'm logan a full stack javascript developer
          </h1>
          <button onClick={() => this.props.scrollto("projects")}>
            View my projects
          </button>
        </div>
      </div>
    );
  }
}
