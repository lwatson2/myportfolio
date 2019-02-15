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
      <nav className={showNav ? "navbar " : "navbar navbar-closed"}>
        <button className="navbar-toggle" onClick={this.handleNav}>
          <FontAwesomeIcon color="#38BEC9" icon="bars" />
        </button>

        <div className={showNav ? "mainNav active" : "mainNav"}>
          <ul className="navBarListWrapper">
            <li className="navBarListItem">
              <button
                className="navbarBtn"
                onClick={() => this.props.scrollto("home")}
              >
                Home
              </button>
            </li>
            <li className="navBarListItem">
              <button
                className="navbarBtn"
                onClick={() => this.props.scrollto("about")}
              >
                What I use
              </button>
            </li>
            <li className="navBarListItem">
              <button
                className="navbarBtn"
                onClick={() => this.props.scrollto("projects")}
              >
                My projects
              </button>
            </li>
            <li className="navBarListItem">
              <button
                className="navbarBtn"
                onClick={() => this.props.scrollto("footer")}
              >
                Contact Me
              </button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
