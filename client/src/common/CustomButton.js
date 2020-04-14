import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const CustomButton = ({ text, setClick, isActive, type, style }) => {
  return (
    <Button
      style={style}
      onClick={setClick}
      isActive={isActive}
      type={type}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
CustomButton.propTypes = {
  text: PropTypes.string.isRequired
};

const Button = styled.button`
  outline: none;
  text-decoration: none;
  border: ${({ isActive }) =>  isActive ? '1px solid #00bcd4' : '1px solid #1976d2' };
  color: ${({ isActive }) => isActive ? '#00bcd4' : '#1976d2'}; 
  background: transparent;
  padding: 5px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
  box-sizing: border-box;
  transition: 0.5s;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2), 0px 0px 5px 0px rgba(0,0,0,0.14), 0px 0px 5px 0px rgba(0,0,0,0.12);
`;
