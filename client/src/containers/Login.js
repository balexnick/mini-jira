import React, { Component } from "react";
import { connect } from "react-redux";
import { browserHistory } from "../index";
import PropTypes from "prop-types";
import styled from "styled-components";
import loginImg from "../assets/login.png";
import { login } from "../actions/actions";
import CustomInput from "../common/CustomInput";
import CustomButton from "../common/CustomButton";
import AuthWindow from "../components/AuthWindow";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  singIn = () => {
    const { email, password } = this.state;
    const data = {
      email,
      password
    };
    this.props.login(data);
  };
  render() {
    return (
      <AuthWindow name="registerShow" image={loginImg} text="Sign in">
        <CustomInput
          inputValue="Email"
          typeInp="email"
          setValue={val => this.setState({ email: val })}
        />
        <CustomInput
          inputValue="Password"
          typeInp="password"
          setValue={val => this.setState({ password: val })}
        />
        <Buttons>
          <CustomButton text="Sign in" setClick={this.singIn} />
          <RedirectToPage onClick={() => browserHistory.push("/signUp")}>
            Sign up
          </RedirectToPage>
        </Buttons>
      </AuthWindow>
    );
  }
}
Login.propTypes = {
  login: PropTypes.func.isRequired
};
const mapDispatchToProps = dispatch => {
  return {
    login: data => dispatch(login(data))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Login);

const RedirectToPage = styled.div`
  margin: 0;
  cursor: pointer;
  color: #7e7efa;
  text-decoration: 1;
  padding: 0 25px;
`;
const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;
