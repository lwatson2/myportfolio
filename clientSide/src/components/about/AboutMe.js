import React, { Component } from "react";
import "./AboutMe.css";
import nodeicon from "../../images/iconfinder_nodejs-new-pantone-black_1012818.svg";
import mongodbicon from "../../images/development.svg";
import giticon from "../..//images/iconfinder_git-branch_298785.svg";

export default class AboutMe extends Component {
  render() {
    return (
      <div className="aboutWrapper">
        <div className="techWrapper">
          <h2>
            {" "}
            These are the technologies I have worked with ad are familiar with
          </h2>
          <div className="iconWrapper" />
        </div>
      </div>
    );
  }
}
