import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router";
import Login from "./containers/Login";
import HomePage from "./containers/HomePage";
import Logout from "./containers/Logout";

import Register from "./containers/Register";
import AuthContainer from "./components/AuthContainer";

class App extends Component {
  state = {};
  isAuth = component => {
    const token = localStorage.getItem("token");
    if (!token) return <Redirect to="/SignIn" />;
    return component;
  };

  notAuth = component => {
    const token = localStorage.getItem("token");
    if (token) return <Redirect to="/" />;
    return <AuthContainer>{component}</AuthContainer>;
  };
  render() {
    return (
      <Switch>
        <Route path="/SignIn" render={() => this.notAuth(<Login />)} />
        <Route path="/signUp" render={() => this.notAuth(<Register />)} />
        <Route path="/logout" render={() => this.isAuth(<Logout />)} />
        <Route path="/" exact render={() => this.isAuth(<HomePage />)} />
        {/* 
          <Route path="/:page" render={() => this.isAuth(<HomePage />)} />
          <Route path="/" exact render={() => this.isAuth(<HomePage />)} /> */}
      </Switch>
    );
  }
}

export default App;
