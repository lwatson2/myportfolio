import React, { Component } from "react";
import axios from "axios";
import "./Contact.css";

export default class Contact extends Component {
  state = {
    nameValue: "",
    messageValue: "",
    emailValue: "",
    subjectValue: "",
    success: false,
    error: false,
    errMsg: ""
  };
  componentDidMount() {
    axios.get("/test");
  }
  handleSubjectChange = e => {
    this.setState({ subjectValue: e.target.value });
  };
  handleNameChange = e => {
    this.setState({ nameValue: e.target.value });
  };
  handleEmailChange = e => {
    this.setState({ emailValue: e.target.value });
  };
  handleMessageChange = e => {
    this.setState({ messageValue: e.target.value });
  };
  handleSubmit = async e => {
    e.preventDefault();
    const { nameValue, messageValue, emailValue, subjectValue } = this.state;
    let data = {
      name: nameValue,
      email: emailValue,
      subject: subjectValue,
      message: messageValue
    };
    if (
      nameValue === "" ||
      emailValue === "" ||
      subjectValue === "" ||
      messageValue === ""
    ) {
      return this.setState({ error: true, errMsg: "All forms are required" });
    }
    // Submit data from contact form to backend to send email
    const res = await axios.post("/sendmail", data);
    //If email is sent clear state and show success message
    if (res.data.success) {
      return this.setState({
        success: true,
        nameValue: "",
        messageValue: "",
        subjectValue: "",
        emailValue: ""
      });
    } else {
      // Else show error message
      return this.setState({ error: true, errMsg: "Oops! Please try again." });
    }
  };
  render() {
    const { error, errMsg, success } = this.state;
    return (
      <main className="contactFormWrapper">
        <h3 className="contactMeText">
          Contact me on{" "}
          <a
            href="https://linkedin.com/in/loganawatson"
            className="linkedInLink"
          >
            LinkedIn
          </a>{" "}
          or email me.
        </h3>
        {error && (
          <div className="errorMessageDiv">
            <span>{errMsg}</span>
          </div>
        )}
        {success && (
          <div className="successMessageDiv">
            <span>Message sent.</span>
          </div>
        )}
        <div className="formWrapper">
          <form onSubmit={this.handleSubmit} className="contactForm">
            <label className="formLabel">
              Name
              <input
                type="text"
                value={this.state.nameValue}
                onChange={this.handleNameChange}
                className="formField"
              />
            </label>
            <label className="formLabel">
              Email
              <input
                type="text"
                value={this.state.emailValue}
                onChange={this.handleEmailChange}
                className="formField"
              />
            </label>
            <label className="formLabel">
              Subject
              <input
                type="text"
                value={this.state.subjectValue}
                onChange={this.handleSubjectChange}
                className="formField"
              />
            </label>
            <label className="formLabel">
              Message
              <textarea
                type="text"
                rows="5"
                cols="30"
                value={this.state.messageValue}
                onChange={this.handleMessageChange}
                className="messageField"
              />
            </label>
            <button type="submit" className="contactBtn">
              Submit
            </button>
          </form>
        </div>
      </main>
    );
  }
}
