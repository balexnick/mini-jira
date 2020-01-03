import React, { Component } from 'react';
import { browserHistory } from '../index';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import registerImg from '../assets/register.png';
import { register } from '../actions/actions';
import CustomInput from '../common/CustomInput';
import CustomButton from '../common/CustomButton';
import AuthWindow from '../components/auth/AuthWindow';
import { RedirectToPage } from '../common/Styled/index'

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };
  signUp = (e) => {
    e.preventDefault();
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
      <AuthWindow name="showWindowRight" image={registerImg} text="Sign Up">
        <form action="">
          <CustomInput
            inputPlaceholder="Name"
            typeInp="text"
            setValue={val => this.setState({ name: val })}
          />
          <CustomInput
            inputPlaceholder="Email"
            typeInp="email"
            setValue={val => this.setState({ email: val })}
          />
          <CustomInput
            inputPlaceholder="Password"
            typeInp="password"
            setValue={val => this.setState({ password: val })}
          />
          <Buttons>
            <CustomButton
              text="Sign up"
              bgColor={'transparent'}
              brColor={'1px solid #f27059'}
              textColor={'#f27059'}
              setClick={this.signUp} />
            <RedirectToPage onClick={() => browserHistory.push("/signIn")}>
              Sing in
          </RedirectToPage>
          </Buttons>
        </form>
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

export default connect(null, mapDispatchToProps)(Register);


const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;
