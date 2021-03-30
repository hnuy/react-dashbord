import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import "../component/profile.css";
import axios from "axios";
import { Alert } from "reactstrap";
import Page from "./Page";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default class editProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      imgProfile: "",
      picture: "",
      buffer: "",
      b64: "",
      mimeType: "",
    };
    let decoded;
    const token = localStorage.getItem("token");
    if (token) {
      decoded = jwt_decode(token);
      if (decoded && decoded.imgProfile) {
        const buffer = decoded.data.data; // e.g., <Buffer 89 50 4e ... >
        const b64 = new Buffer(buffer).toString("base64");
        const Type = decoded.mimetype;
        this.state = {
          firstName: decoded.firstName,
          lastName: decoded.lastName,
          email: decoded.email,
          password: "",
          imgProfile: "",
          picture: "",
          buffer,
          b64,
          mimeType: Type,
        };
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemoveToken = this.handleRemoveToken.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.routeChange = this.routeChange.bind(this);
  }

  handleRemoveToken() {
    localStorage.clear();
  }

  routeChange() {
    let path = `/sign-in`;
    this.props.history.push(path);
  }
  handleImage(event) {
    this.setState({
      picture: URL.createObjectURL(event.target.files[0]),
      imgProfile: event.target.files[0],
    });
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("imgProfile", this.state.imgProfile);
    formData.append("firstName", this.state.firstName);
    formData.append("lastName", this.state.lastName);
    formData.append("email", this.state.email);
    if (this.state.password.length !== 0) {
      formData.append("password", this.state.password);
    }
    await axios
      .post("http://localhost:8080/api/test/edit-profile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        alert("Update Profile");
      })
      .catch((error) => {
        alert(error.message);
        throw error;
      });
  };
  render() {
    return (
      <Page className="ProfilePage" title="Profile">
        <ul class="nav nav-pills nav-fill">
          <li class="nav-item">
            <Alert color="primary">
              <a
                class="nav-link active bg-secondary"
                aria-current="page"
                href="main-app"
              >
                Home
              </a>
            </Alert>
          </li>
          <li class="nav-item">
            <Alert color="secondary">
              <a
                class="nav-link active bg-success"
                aria-current="page"
                href="card"
              >
                Card
              </a>
            </Alert>
          </li>
          <li class="nav-item">
            <Alert color="warning">
              <a
                class="nav-link active bg-warning"
                aria-current="page"
                href="task"
              >
                Task
              </a>
            </Alert>
          </li>
          <li class="nav-item">
            <Alert color="danger">
              <a
                class="nav-link active bg-danger"
                aria-current="page"
                href="alert"
              >
                Alert
              </a>
            </Alert>
          </li>
          <li class="nav-item">
            <Alert color="primary">
              <a
                class="nav-link active bg-primary"
                aria-current="page"
                href="profile"
              >
                Profile
              </a>
            </Alert>
          </li>
        </ul>
        <div class="row gutters">
          <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <div class="card h-100">
              <div class="card-body">
                <div class="account-settings">
                  <div class="user-profile">
                    <div class="user-avatar">
                      <img
                        src={
                          this.state.picture
                            ? this.state.picture
                            : this.state.buffer
                            ? `data:${this.state.mimeType};base64,${this.state.b64}`
                            : "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png"
                        }
                        alt="Maxwell Admin"
                      />
                    </div>
                    <h5 class="user-name">
                      {this.state.firstName} {this.state.lastName}
                    </h5>
                    <form
                      ref="myForm"
                      action="/profile"
                      method="post"
                      enctype="multipart/form-data"
                    >
                      <input
                        type="file"
                        name="imgProfile"
                        onChange={this.handleImage}
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <div class="card h-100">
              <div class="card-body">
                <div class="row gutters">
                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 class="mb-2 text-primary">Edit Profile</h6>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="firstName">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        firstName={this.state.firstName}
                        onChange={this.handleChange}
                        className="form-control"
                        placeholder={this.state.firstName}
                      />
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="eMail">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder={this.state.email}
                        email={this.state.email}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="lastName">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        onChange={this.handleChange}
                        className="form-control"
                        placeholder={this.state.lastName}
                      />
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                      <label for="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="new password"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row gutters">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div class="text-right">
                    <button
                      type="button"
                      id="submit"
                      name="submit"
                      class="btn btn-secondary"
                      onClick={localStorage.clear()}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      id="submit"
                      name="submit"
                      class="btn btn-primary"
                      onClick={this.handleSubmit}
                    >
                      Edit Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}
