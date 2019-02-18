import React, { Component } from "react";
import "./AboutMe.css";
import nodeicon from "../../images/icons8-nodejs.svg";
import mongodbicon from "../../images/icons8-mongodb.svg";
import giticon from "../..//images/git-seeklogo.com.svg";
import reacticon from "../../images/react.svg";

export default class AboutMe extends Component {
  state = {
    showTech: false,
    techName: ""
  };
  handleMouseEnter = tech => {
    switch (tech) {
      case "git":
        return this.setState({ showTech: true, techName: "git" });
      case "nodejs":
        return this.setState({ showTech: true, techName: "Nodejs" });
      case "mongodb":
        return this.setState({ showTech: true, techName: "mongodb" });
      case "react":
        return this.setState({ showTech: true, techName: "react" });
      default:
        return null;
    }
  };
  handleMouseLeave = () => {
    this.setState({ showTech: false, techName: "" });
  };
  render() {
    return (
      <main className="aboutWrapper">
        <div className="techWrapper">
          <h2 className="h2Tech">
            These are the technologies I have worked with and are familiar with.
          </h2>
          <div className="iconWrapper">
            <div className="gitIconWrapper">
              <img
                className="icon"
                src={giticon}
                alt="git icon"
                onMouseEnter={() => this.handleMouseEnter("git")}
                onMouseLeave={this.handleMouseLeave}
              />
              {this.state.techName === "git" ? (
                <div className="technameWrapper">
                  <span>Git</span>{" "}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="nodeIconWrapper">
              <img
                src={nodeicon}
                alt="nodejs icon"
                onMouseEnter={() => this.handleMouseEnter("nodejs")}
                onMouseLeave={this.handleMouseLeave}
                className="icon"
              />
              {this.state.techName === "Nodejs" ? (
                <div className="technameWrapper">
                  <span>Nodejs</span>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="mongoIconWrapper">
              <img
                src={mongodbicon}
                className="icon"
                alt="mongodb icon"
                onMouseEnter={() => this.handleMouseEnter("mongodb")}
                onMouseLeave={this.handleMouseLeave}
              />
              {this.state.techName === "mongodb" ? (
                <div className="technameWrapper">
                  <span>MongoDB</span>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="reactIconWrapper">
              <img
                src={reacticon}
                alt="reactjs icon"
                className="icon"
                onMouseEnter={() => this.handleMouseEnter("react")}
                onMouseLeave={this.handleMouseLeave}
              />
              {this.state.techName === "react" ? (
                <div className="technameWrapper">
                  <span>Reactjs</span>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </main>
    );
  }
}
