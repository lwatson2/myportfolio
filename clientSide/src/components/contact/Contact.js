import React, { Component } from "react";
import "./Contact.css";

export default class Contact extends Component {
  state = {
    nameValue: "",
    messageValue: "",
    emailValue: "",
    subjectValue: ""
  };
  handleSubjectChange = e => {
    this.setState({ subjectValue: e.target.value });
  };
  handleNameChange = e => {
    console.log("object");
    this.setState({ nameValue: e.target.value });
  };
  handleEmailChange = e => {
    this.setState({ emailValue: e.target.value });
  };
  handleMessageChange = e => {
    this.setState({ messageValue: e.target.value });
  };
  render() {
    return (
      <main className="contactFormWrapper">
        <p>Contact me </p>
        <div className="formWrapper">
          <form onSubmit={this.handleSubmit} className="contactForm">
            <label className="formLabel">Name</label>
            <input
              type="text"
              value={this.state.nameValue}
              onChange={this.handleNameChange}
              className="formField"
            />
            <label className="formLabel">Email</label>
            <input
              type="text"
              value={this.state.emailValue}
              onChange={this.handleEmailChange}
              className="formField"
            />
            <label className="formLabel">Subject</label>
            <input
              type="text"
              value={this.state.subjectValue}
              onChange={this.handleSubjectChange}
              className="formField"
            />
            <label className="formLabel">Message</label>
            <textarea
              type="text"
              rows="5"
              cols="30"
              value={this.state.messageValue}
              onChange={this.handleMessageChange}
              className="messageField"
            />
          </form>
        </div>
      </main>
    );
  }
}
