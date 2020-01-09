import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const CustomButton = ({ text, setClick, isActive, bgColor, brColor, textColor, type }) => {
  return (
    <Button
      onClick={setClick}
      isActive={isActive}
      bgColor={bgColor}
      brColor={brColor}
      textColor={textColor}
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
  border: ${({ isActive, brColor }) => isActive ? '1px solid #00bcd4' : brColor};
  color: ${({ textColor, isActive }) => isActive ? '#00bcd4' : textColor}; 
  background: ${({ bgColor }) => bgColor};
  padding: 5px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
  margin-right: 10px;
  box-sizing: border-box;
  transition: 0.5s;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
`;
