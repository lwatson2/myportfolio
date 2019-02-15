import React, { Component } from "react";
import "./Projects.css";
import reactpokedex from "../../images/React-Pokedex.png";

export default class Projects extends Component {
  render() {
    return (
      <div className="projectsWrapper">
        <div className="pokedexContainer">
          <div className="reactdexDescContainer">
            <h2 className="projectName"> React-Pokedex </h2>
            <img
              className="projectImg"
              src={reactpokedex}
              alt="react-pokedex"
            />
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
                  <a href="https://pokeapi.co/">https://pokeapi.co/.</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
