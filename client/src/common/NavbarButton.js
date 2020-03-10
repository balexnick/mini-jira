import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const NavbarButton = ({ text, setClick, isActive, style, children }) => {
  return (
    <NavbarBtn
      style={style}
      onClick={setClick}
      isActive={isActive}
    >
      {children}
      <div>{text}</div>
    </NavbarBtn>
  );
};

export default NavbarButton;
NavbarButton.propTypes = {
  text: PropTypes.string.isRequired,
  setClick: PropTypes.func.isRequired,
  // children: PropTypes.object.isRequired
};

const NavbarBtn = styled.button`
  outline: none;
  border: none;
  background: ${({ isActive }) => isActive ? '#06367e' : 'transparent'};
  font-size: 22px;
  padding: 15px 55px;
  color: #fff;
  cursor: pointer;
  width: 100%;
  display: flex;
  border-radius: 5px;
  transition: .2s;
  &:hover{
    background: ${({ isActive }) => isActive ? '#06367e' : '#1c12cf'};
  }
`;
