import React, { Component } from "react";
import axios from "axios";
import "../index.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", error: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.routeChange = this.routeChange.bind(this);
    this.routeChangeToSingUp = this.routeChangeToSingUp.bind(this);
  }

  routeChange() {
    let path = `/main-app`;
    this.props.history.push(path);
  }

  routeChangeToSingUp() {
    let path = `/sign-up`;
    this.props.history.push(path);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    if (!this.state.email && !this.state.password) {
      this.setState({
        error: "**field cannot be empty**",
      });
      return;
    }
    const body = {};
    body.email = this.state.email;
    body.password = this.state.password;
    await axios
      .post("http://localhost:8080/api/auth/signin", body)
      .then((res) => {
        localStorage.setItem("token", res.data.accessToken);
        this.routeChange();
      })
      .catch((error) => {
        alert(error.response.data.message);
        throw error;
      });
  };

  render() {
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={this.handleSubmit}>
            <h3>Log in</h3>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter Email"
                email={this.state.email}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Enter password"
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  Forgot <a href="wait somting">password?</a>
                </label>

                <br></br>
                {this.state.error !== "" ? (
                  <span style={{ color: "red" }}>{this.state.error}</span>
                ) : (
                  ""
                )}
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Sing in
            </button>
            <p style={{ textAlign: "center" }}>OR</p>
          </form>
          <button type="submit" className="btn btn-primary btn-block" onClick={this.routeChangeToSingUp}>
            Sing out
          </button>
        </div>
      </div>
    );
  }
}
