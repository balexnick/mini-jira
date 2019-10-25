import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router";
import Login from "./containers/Login";
import HomePage from "./containers/HomePage";
import Logout from "./containers/Logout";

import Register from "./containers/Register";
import AuthPage from "./components/AuthPage";

class App extends Component {
  state = {};
  isAuth = component => {
    const token = localStorage.getItem("token");
    if (!token) return <Redirect to="/signIn" />;
    return component;
  };

  notAuth = component => {
    const token = localStorage.getItem("token");
    if (token) return <Redirect to="/" />;
    return <AuthPage>{component}</AuthPage>;
  };
  render() {
    return (
      <Switch>
        <Route path='/signIn' render={() => this.notAuth(<Login />)} />
        <Route path='/signUp' render={() => this.notAuth(<Register />)} />
        <Route path='/logout' render={() => this.isAuth(<Logout />)} />
        <Route path='/myProfile' render={() => this.isAuth(<HomePage />)} />
        <Route path='/addTask' render={() => this.isAuth(<HomePage />)} />
        <Route path='/myTasks' render={() => this.isAuth(<HomePage />)} />
        <Route path='/' render={() => this.isAuth(<Redirect to='/myTasks' />)} />
      </Switch>
    );
  }
}

export default App;
