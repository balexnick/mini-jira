import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router";
import Login from "containers/Login";
import HomePage from "containers/HomePage";
import Logout from "containers/Logout";
// import cookies from 'js-cookie'
import Loader from 'common/Loader'
import Register from "containers/Register";
import AuthPage from "components/auth/AuthPage";

class App extends Component {
  state = {};
  isAuth = component => {
    // const token = cookies.get("token");
    const token = localStorage.getItem('token')
    if (!token) return <Redirect to="/signIn" />;
    return (
      <div>
        {component}
        <Loader/>
      </div>
    );
  };

  notAuth = component => {
    // const token = cookies.get("token");
    const token = localStorage.getItem('token')
    if (token) return <Redirect to="/" />;
    return ( 
      <AuthPage>{component}
        <Loader/>
      </AuthPage>
    )
  };
  render() {
    return (
      <Switch>
        <Route path='/signIn' render={() => this.notAuth(<Login />)} />
        <Route path='/signUp' render={() => this.notAuth(<Register />)} />
        <Route path='/logout' render={() => this.isAuth(<Logout />)} />
        <Route path='/your-profile' render={() => this.isAuth(<HomePage />)} />
        <Route path='/edit-your-profile' render={() => this.isAuth(<HomePage />)} />
        <Route path='/your-work' render={() => this.isAuth(<HomePage />)} />
        <Route path='/dashboard' render={() => this.isAuth(<HomePage />)} />
        <Route path='/users' render={() => this.isAuth(<HomePage />)} />
        <Route path='/all-tasks' render={() => this.isAuth(<HomePage />)} />
        <Route path='/' render={() => this.isAuth(<Redirect to='/your-work' />)} />
      </Switch>
    );
  }
}

export default App;
