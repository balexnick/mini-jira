import React from "react";
import styled from "styled-components";

const CustomAuthPage = ({ children, image, text, name }) => {
  return (
    <AuthContainer className={name}>
      <Img src={image} alt="logo" />
      <AuthForm>
        <h1>{text}</h1>
        {children}
      </AuthForm>
    </AuthContainer>
  );
};

export default CustomAuthPage;
const AuthContainer = styled.div`
  width: 50vw;
  background: #f7f7f7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 55px;
  border-radius: 5px;
  position: relative;
  @media (max-width: 1200px) {
    width: 70vw;
  }
  @media (max-width: 665px) {
    justify-content: center;
    padding: 30px;
  }
`;
const AuthForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  @media (max-width: 665px) {
  }
`;
const Img = styled.img`
  height: 315px;
  @media (max-width: 810px) {
    height: 250px;
  }
  @media (max-width: 650px) {
    /* height: 200px; */
  }
`;
