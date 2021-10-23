import React, { Component } from "react";
import authInstance from "../../service/auth-service";
import { Redirect } from "react-router-dom";

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
    authInstance.signup(this.state).then((data) => {
      console.log({ data });
      // upon successfull
      this.props.history.push("/");
    });
  };

  render() {
    console.log(this.props);
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
