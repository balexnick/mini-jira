import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const CustomButton = ({ text, setClick, white, isActive }) => {
  return (
    <Button
      white={white && white}
      onClick={setClick}
      isActive={isActive}
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
  border: ${({ white }) => (white ? 'none' : `1px solid #f27059`)};
  color: ${({ white }) => (white ? '#fff' : '#f27059')};
  /* background:  transparent; */
  background: ${({ isActive }) => isActive ? '#68747f' : 'transparent'};
  padding: 5px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
  margin-right: 10px;
  box-sizing: border-box;
  transition: 0.5s;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  &:hover {
    background: ${({ white }) => (white ? 'rgba(255, 255, 255, 0.1)' : '#f27059')};
    color: #fff;
  }
  &:focus {
    box-shadow: ${({ white }) => `0px 0px 0px 3px ${white ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 106, 57, 0.4)'}`} ;
  }
`;
