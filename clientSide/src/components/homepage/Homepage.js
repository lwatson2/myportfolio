import React, { Component } from "react";
import "./Homepage.css";

export default class Homepage extends Component {
  render() {
    return (
      <header className="homepageWrapper">
        <div className="aboutwrapper">
          <h1 className="aboutText">
            Hi, I'm Logan a full stack javascript developer.
          </h1>
          <button
            className="projectsBtn"
            onClick={() => this.props.scrollto("projects")}
          >
            View projects
          </button>
          <button className="resumeBtn">View resume </button>
        </div>
      </header>
    );
  }
}
