import React, { Component } from "react";
import "./Footer.css";
import githubIcon from "../../images/icons8-github.svg";
import linkedInIcon from "../../images/icons8-linkedin.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footerWrapper">
        <div className="footerIconWrapper">
          <a
            href="https://github.com/lwatson2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="githubIcon" src={githubIcon} alt="github Icon" />
          </a>
          <button
            className="scrollToTopBtn"
            onClick={() => this.props.scrollTo("home")}
          >
            <FontAwesomeIcon color="#38bec9" icon="angle-double-up" size="2x" />
          </button>
          <a
            href="https://linkedin.com/in/loganawatson"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="linkedInIcon"
              src={linkedInIcon}
              alt="linkedIn icon"
            />
          </a>
        </div>
      </footer>
    );
  }
}
