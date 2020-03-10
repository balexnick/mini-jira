import React from "react";
import styled from "styled-components";
import { CustomWindow } from 'common/Styled/index'
import PropTypes from 'prop-types';

const AuthWindow = ({ children, image, text, name }) => {
  return (
    <CustomWindow className={name}>
      <Img src={image} alt="logo" />
      <AuthForm>
        <h1>{text}</h1>
        {children}
      </AuthForm>
    </CustomWindow>
  );
};

export default AuthWindow;

AuthWindow.propTypes = {
  children: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

const AuthForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  @media (max-width: 665px) {
  }
`;
const Img = styled.img`
  height: 270px;
  @media (max-width: 810px) {
    height: 250px;
  }
`;
