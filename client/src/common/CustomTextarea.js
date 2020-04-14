import React from "react";
import styled from "styled-components";
const CustomTextarea = ({ setValue, placeholder, disabled, value }) => {
  return (
      <Textarea
        cols="40"
        rows="8"
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={e => setValue(e.target.value)}
      />
  );
};
export default CustomTextarea;
const Textarea = styled.textarea`
  font-size: 16px;
  padding: 10px 26px 10px 10px;
  display: block;
  width: 25vw;
  border: 1.5px solid #ccc;
  resize: none;
  border-radius: 7px;
  outline: none;
  transition: .3s;
  box-sizing: border-box;
  font-family: sans-serif;
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
