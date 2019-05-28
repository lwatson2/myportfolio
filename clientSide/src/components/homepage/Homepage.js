import React, { Component } from "react";
import "./Homepage.css";
import resume from "../../resume/Logan's_Resume.pdf";

export default class Homepage extends Component {
  render() {
    return (
      <header className="homepageWrapper">
        <div className="aboutwrapper">
          <h1 className="aboutText">
            Hi, I'm Logan a full stack javascript developer.
          </h1>
          <div className="homepageBtnWrapper">
            <button
              className="projectsBtn"
              onClick={() => this.props.scrollto("projects")}
            >
              View projects
            </button>
            <div className="resumeBtn">
              <a
                className="resumeLink"
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                View resume
              </a>{" "}
            </div>
          </div>
        </div>
      </header>
    );
  }
}
