import React, { Component } from "react";
import "./App.css";
import AboutMe from "./components/about/AboutMe";
import Homepage from "./components/homepage/Homepage";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import NavBar from "./components/navbar/NavBar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter } from "react-router-dom";
import { Element, scroller } from "react-scroll";

library.add(faBars);

class App extends Component {
  scrollto = element => {
    scroller.scrollTo(`${element}`, {
      duration: 500,
      delay: 0,
      smooth: true,
      offset: -60
    });
  };
  render() {
    return (
      <BrowserRouter>
        <div>
          <Element name="home">
            <Homepage scrollto={this.scrollto} />
          </Element>
          <div>
            <div className="navbarWrapper">
              <NavBar scrollto={this.scrollto} />
            </div>
            <Element name="about">
              <AboutMe />
            </Element>
            <Element name="projects">
              <Projects />
            </Element>
            <Element name="contact">
              <Contact />
            </Element>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
