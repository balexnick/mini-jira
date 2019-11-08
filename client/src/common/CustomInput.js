import React from "react";
import styled from "styled-components";
const CustomInput = ({ setValue, inputPlaceholder, typeInp, disabled, inpValue }) => {
  return (
    <InputComponent>
      <Input
        value={inpValue}
        disabled={disabled}
        placeholder={inputPlaceholder}
        type={typeInp}
        onChange={e => setValue(e.target.value)}
      />
      <Bar className="bar"></Bar>
    </InputComponent>
  );
};
export default CustomInput;
const InputComponent = styled.div`
  margin: 10px 0;
  @media (max-width: 650px) {
  }
`;
const Input = styled.input`
  font-size: 16px;
  padding: 10px 26px 10px 10px;
  display: block;
  width: 25vw;
  border: none;
  border-bottom: 1px solid #ccc;
  background: transparent;
  outline: none;
  border-radius: none;
  @media (max-width: 1200px) {
    width: 30vw;
  }
  @media (max-width: 665px) {
    width: inherit;
  }
  &:focus ~ .bar:before,
  &:focus ~ .bar:after {
    width: 50%;
  }
`;

const Bar = styled.span`
  position: relative;
  display: block;
  &:after,
  &:before {
    content: "";
    height: 2px;
    width: 0;
    bottom: 0;
    position: absolute;
    background: #5264ae;
    transition: 0.2s ease all;
  }
  &:before {
    left: 50%;
  }

  &:after {
    right: 50%;
  }
`;
