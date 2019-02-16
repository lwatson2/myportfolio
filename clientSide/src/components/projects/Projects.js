import React, { Component } from "react";
import "./Projects.css";
import reactpokedex from "../../images/React-Pokedex.png";

export default class Projects extends Component {
  render() {
    return (
      <div className="projectsWrapper">
        <div className="pokedexContainer">
          <h2 className="projectName"> React-Pokedex </h2>
          <div className="reactdexDescContainer">
            <div className="projectImgContainer">
              <img
                className="projectImg"
                src={reactpokedex}
                alt="react-pokedex"
              />
            </div>
            <div className="projectDescContainer">
              <div className="projectTechs">
                <p>Technologies I used:</p>
                <p>React</p>
              </div>
              <div className="projectDesc">
                <p>
                  React-Pokedex is a database where users can look up pokemon by
                  name or id and view details about that pokemon. Data is
                  gathered from{" "}
                  <a className="pokeApiLink" href="https://pokeapi.co/">
                    https://pokeapi.co/.
                  </a>
                </p>
              </div>
              <div className="btnWrapper">
                <button className="projectLinkBtn">
                  <a
                    className="projectLink"
                    href="https://lwatson2.github.io/react-pokedex/"
                  >
                    View App
                  </a>
                </button>
                <button className="projectLinkBtn">
                  <a
                    className="projectLink"
                    href="https://github.com/lwatson2/react-pokedex"
                  >
                    View Code
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
