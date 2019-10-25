import React, { Component } from "react";
import { browserHistory } from "../index";
import { connect } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";
import registerImg from "../assets/register.png";
import { register } from "../actions/actions";
import CustomInput from "../common/CustomInput";
import CustomButton from "../common/CustomButton";
import AuthWindow from "../components/AuthWindow";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };
  signUp = () => {
    const { name, email, password } = this.state;
    const data = {
      name,
      email,
      password
    };
    this.props.register(data);
  };
  render() {
    return (
      <AuthWindow name="loginShow" image={registerImg} text="Sign Up">
        <CustomInput
          inputValue="Name"
          typeInp="text"
          setValue={val => this.setState({ name: val })}
        />
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
          <CustomButton text="Sign up" setClick={this.signUp} />
          <RedirectToPage onClick={() => browserHistory.push("/signIn")}>
            Sing in
          </RedirectToPage>
        </Buttons>
      </AuthWindow>
    );
  }
}
Register.propTypes = {
  register: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    register: data => dispatch(register(data))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Register);

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
