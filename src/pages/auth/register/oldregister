import React, { Component } from "react";
import accountService from "../../../api/accountService";
import AccountService from "../../../api/accountService";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      firstName: "",
      lastname: "",
      email: "",
      password: "",
      confirmedPassword: "",
    };
  }
  submit = (event) => {
    event.preventDefault();
    console.log(event);
    if (this.state.password === this.state.confirmedPassword) {
      const user = {
        username: this.state.username,
        firstName: this.state.firstName,
        lastname: this.state.lastname,
        email: this.state.email,
        password: this.state.password,
      };
      accountService.register(
        this.state.username,
        this.state.firstName,
        this.state.lastname,
        this.state.email,
        this.state.password
      );
    }
  };

  setUsername = (username) => {
    this.setState({ username });
  };

  setFirstName = (firstName) => {
    this.setState({ firstName });
  };

  setLastName = (lastName) => {
    this.setState({ lastName });
  };

  setEmail = (email) => {
    this.setState({ email });
  };

  setPassword = (password) => {
    this.setState({ password });
  };

  setConfirmedPassword = (confirmedPassword) => {
    this.setState({ confirmedPassword });
  };

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <form onSubmit={this.submit}>
              {/* ROW 1 */}
              <div className="row">
                {/* USERNAME */}
                <div className="col">
                  <div className="form-group">
                    <label for="usernameInput">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      id="usernameInput"
                      placeholder="Username"
                      onChange={(e) => this.setUsername(e.target.value)}
                    />
                  </div>
                </div>
                {/* FIRST NAME */}
                <div className="col">
                  <div className="form-group">
                    <label for="firstNameInput">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstNameInput"
                      placeholder="First Name"
                      onChange={(e) => this.setFirstName(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              {/* ROW 2 */}
              <div className="row">
                {/* LAST NAME */}
                <div className="col">
                  <div className="form-group">
                    <label for="lastNameInput">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastNameInput"
                      placeholder="Last Name"
                      onChange={(e) => this.setLastName(e.target.value)}
                    />
                  </div>
                </div>
                {/* EMAIL */}
                <div className="col">
                  <div className="form-group">
                    <label for="emailInput">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="emailInput"
                      placeholder="Email"
                      onChange={(e) => this.setEmail(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              {/* ROW 2 */}
              <div className="row">
                {/* PASSWORD */}
                <div className="col">
                  <div className="form-group">
                    <label for="passwordInput">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="passwordInput"
                      placeholder="Password"
                      onChange={(e) => this.setPassword(e.target.value)}
                    />
                  </div>
                </div>
                {/* CONFIRM PASSWORD */}
                <div className="col">
                  <div className="form-group">
                    <label for="confirmPasswordInput">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPasswordInput"
                      placeholder="Confirm Password"
                      onChange={(e) =>
                        this.setConfirmedPassword(e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <div className="col"></div>
        </div>
      </React.Fragment>
    );
  }
}

export default LoginPage;
