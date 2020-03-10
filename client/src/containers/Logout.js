import React, { Component } from "react";
import { Redirect } from "react-router";
// import cookies from 'js-cookie'

class Logout extends Component {
  state = {};
  componentDidMount() {
    // cookies.remove("token");
    // cookies.remove("userId");
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
  }
  render() {
    return <Redirect to="/" />;
  }
}
export default Logout;
