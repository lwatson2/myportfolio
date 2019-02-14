import React, { Component } from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Use position sticky for the navbar
export default class NavBar extends Component {
  state = {
    showNav: false
  };
  handleNav = () => {
    this.setState({ showNav: !this.state.showNav });
  };

  render() {
    const { showNav } = this.state;
    return (
      <div className={showNav ? "navbar " : "navbar navbar-closed"}>
        <button className="navbar-toggle" onClick={this.handleNav}>
          <FontAwesomeIcon icon="bars" />
        </button>

        <div className={showNav ? "mainNav active" : "mainNav"}>
          <ul className="navBarListWrapper">
            <li className="navBarListItem">
              <button onClick={() => this.props.scrollto("home")}>Home</button>
            </li>
            <li
              className="navBarListItem"
              onClick={() => this.props.scrollto("about")}
            >
              What I use
            </li>
            <li
              className="navBarListItem"
              onClick={() => this.props.scrollto("projects")}
            >
              My projects
            </li>
            <li
              className="navBarListItem"
              onClick={() => this.props.scrollto("footer")}
            >
              Contact Me
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
