import React, { Component } from 'react';
import { browserHistory } from 'index';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import registerImg from 'assets/register.png';
import { register } from 'actions/register';
import CustomInput from 'common/CustomInput';
import CustomButton from 'common/CustomButton';
import AuthWindow from 'components/auth/AuthWindow';
import { RedirectToPage } from 'common/Styled/index'

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
    const { name, email, password } = this.state
    return (
      <AuthWindow name="showWindowRight" image={registerImg} text="Sign Up">
        <form action="">
          <CustomInput
            value={name}
            placeholder="Name"
            type="text"
            setValue={val => this.setState({ name: val })}
          />
          <CustomInput
            value={email}
            placeholder="Email"
            type="email"
            setValue={val => this.setState({ email: val })}
          />
          <CustomInput
            value={password}
            placeholder="Password"
            type="password"
            setValue={val => this.setState({ password: val })}
          />
          <Buttons>
            <CustomButton
              text="Sign up"
              style={{borderColor: '#f27059', color: '#f27059'}}
              setClick={this.signUp} 
              type='submit' 
            />
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
