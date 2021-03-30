import React, { Component } from "react";
import axios from "axios";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.routeChange = this.routeChange.bind(this);
  }

  routeChange() {
    let path = `/sign-in`;
    this.props.history.push(path);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !this.state.email &&
      !this.state.password &&
      !this.state.firstName &&
      !this.state.lastName
    ) {
      this.setState({
        error: "**field cannot be empty**",
      });
      return;
    }
    const body = this.state;
    console.log(body);
    await axios
      .post("http://localhost:8080/api/auth/signup", body)
      .then((res) => {
        console.log(res);
        alert(res.data.message);
        this.routeChange();
      })
      .catch((error) => {
        console.log(error);
        alert(error);
        throw error;
      });
  };

  render() {
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={this.handleSubmit}>
            <h3>Sign Up</h3>

            <div className="form-group">
              <label>First name</label>
              <input
                type="text"
                name="firstName"
                firstName={this.state.firstName}
                onChange={this.handleChange}
                className="form-control"
                placeholder="First name"
              />
            </div>

            <div className="form-group">
              <label>Last name</label>
              <input
                type="text"
                name="lastName"
                onChange={this.handleChange}
                className="form-control"
                placeholder="Last name"
              />
            </div>

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
                {this.state.error !== "" ? (
                  <span style={{ color: "red" }}>{this.state.error}</span>
                ) : (
                  ""
                )}
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Submit
            </button>
            <p className="forgot-password text-right">
              Already registered <a href="/sign-in">sign in?</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
