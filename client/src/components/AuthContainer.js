import React from "react";
import styled from "styled-components";
import AppContainerBackground from "../assets/background.jpg";
import { ToastContainer } from "react-toastify";

const AuthContainer = ({ children }) => {
  return (
    <AppContainer>
      {children} <ToastContainer autoClose={2000} />
    </AppContainer>
  );
};

export default AuthContainer;
const AppContainer = styled.div`
  min-height: 100vh;
  background-image: url(${AppContainerBackground});
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
