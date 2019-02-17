import React, { Component } from "react";
import "./Projects.css";
import reactpokedex from "../../images/React-Pokedex.png";
import reactChat from "../../images/React-chat.png";
import simpleimagegallery from "../../images/Simple-image-gallery.png";

export default class Projects extends Component {
  render() {
    return (
      <div className="projectsWrapper">
        <div className="projectContainer">
          <h2 className="projectName"> ReactChat </h2>
          <div className="reactdexDescContainer">
            <div className="projectImgContainer">
              <img
                className="projectImg"
                src={reactChat}
                alt="ReactChat screenshot"
              />
            </div>
            <div className="projectDescContainer">
              <div className="projectTechs">
                <p>Technologies I used:</p>
                <p className="techList">
                  React, Node, MongoDb, and{" "}
                  <a className="socketIoLink" href="https://socket.io/">
                    socket.io
                  </a>
                </p>
              </div>
              <div className="projectDesc">
                <p>
                  ReactChat is a chat application where a user can login and
                  join groups to chat with other users. Features a passport
                  login system with jsonwebtokens.
                </p>
              </div>
              <div className="btnWrapper">
                <button className="projectLinkBtn">
                  <a
                    className="projectLink"
                    href="https://floating-woodland-27702.herokuapp.com/groups/welcome"
                  >
                    View App
                  </a>
                </button>
                <button className="projectLinkBtn">
                  <a
                    className="projectLink"
                    href="https://github.com/lwatson2/wechatapp"
                  >
                    View Code
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="projectContainer">
          <h2 className="projectName"> Simple image gallery</h2>
          <div className="reactdexDescContainer">
            <div className="projectImgContainer">
              <img
                className="projectImg"
                src={simpleimagegallery}
                alt="simple image gallery screenshot"
              />
            </div>
            <div className="projectDescContainer">
              <div className="projectTechs">
                <p>Technologies I used:</p>
                <p className="techList">React, Node, MongoDB, and AWS</p>
              </div>
              <div className="projectDesc">
                <p>
                  Simple image gallery is a web app where I can login and upload
                  photos for users to view.
                </p>
              </div>
              <div className="btnWrapper">
                <button className="projectLinkBtn">
                  <a
                    className="projectLink"
                    href="https://aqueous-mesa-52857.herokuapp.com/"
                  >
                    View App
                  </a>
                </button>
                <button className="projectLinkBtn">
                  <a
                    className="projectLink"
                    href="https://github.com/lwatson2/imagegallery"
                  >
                    View Code
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="projectContainer">
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
