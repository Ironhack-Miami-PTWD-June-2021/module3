import React, { Component } from "react";
import authInstance from "../../service/auth-service";

export default class Signup extends Component {
  state = {
    username: "",
    password: "",
  };

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSignup = (e) => {
    e.preventDefault();
    authInstance.Signup(this.state).then((data) => {
      console.log({ data });
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSignup}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={this.state.username}
          onChange={this.changeHandler}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={this.state.password}
          onChange={this.changeHandler}
        />
        <input type="submit" value="Create account" />
      </form>
    );
  }
}
