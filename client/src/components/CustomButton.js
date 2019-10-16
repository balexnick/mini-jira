import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const CustomButton = ({ text, setClick }) => {
  return <Button onClick={setClick}>{text}</Button>;
};

export default CustomButton;
CustomButton.propTypes = {
  text: PropTypes.string.isRequired
};

const Button = styled.button`
  outline: none;
  text-decoration: none;
  border: 2px solid rgb(255, 106, 57);
  color: ${({ btnColor }) => (btnColor ? "#fff" : "#f27059")};
  background: ${({ btnColor }) => btnColor || "#fff"};
  padding: 5px 25px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
  margin-right: 10px;
  box-sizing: border-box;
  transition: 0.5s;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  &:hover {
    background: #f27059;
    color: #fff;
  }
  &:focus {
    box-shadow: 0px 0px 0px 3px rgba(255, 106, 57, 0.4);
  }
`;
