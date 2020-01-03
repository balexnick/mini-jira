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
  border: 1.5px solid #ccc;

  border-radius: 7px;
  outline: none;
  transition: .3s;
  box-sizing: border-box;
  @media (max-width: 1200px) {
    width: 30vw;
  }
  @media (max-width: 665px) {
    width: inherit;
  }
  &:focus{
    border-color: #2c5affc2;
    box-shadow: 0px 0px 0px 3px #8e90ff96;
  }
`;
