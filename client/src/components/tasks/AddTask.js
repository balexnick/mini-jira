import React from "react";
import styled from "styled-components";
import CustomInput from "../../common/CustomInput";

const MyProfile = () => {
  return (
    <AddContainer>
      <CustomInput
        inpValue={name}
        inputPlaceholder="Name"
        typeInp="text"
        setValue={val => this.setState({ name: val })}
      />
      <CustomInput
        inpValue={name}
        inputPlaceholder="Name"
        typeInp="text"
        setValue={val => this.setState({ name: val })}
      />
    </AddContainer>
  );
};

export default MyProfile;

const AddContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
