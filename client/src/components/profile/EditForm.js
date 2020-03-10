import React, { Component } from "react";
import CustomInput from "common/CustomInput";
import CustomButton from "common/CustomButton";
import { connect } from "react-redux";
import { editUser } from "actions/edit-user";
import styled from "styled-components";
import { browserHistory } from "index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

class EditForm extends Component {
  constructor(props) {
    super(props);
    const { name, email, password, id } = props.testData;
    this.state = { name, email, password, id, visable: false };
  }
  saveNewUserData = () => {
    const { name, email, password, id } = this.state;
    const data = { name, email, password, id };
    this.props.editUser(data);
  };
  render() {
    const { name, email, password, visable } = this.state;
    const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />;
    const eye = <FontAwesomeIcon icon={faEye} />;
    return (
      <div>
        <CustomInput
          inpValue={name}
          inputPlaceholder="Name"
          typeInp="text"
          setValue={val => this.setState({ name: val })}
        />
        <CustomInput
          inpValue={email}
          inputPlaceholder="Email"
          typeInp="email"
          setValue={val => this.setState({ email: val })}
        />
        <Password>
          <CustomInput
            inpValue={password}
            inputPlaceholder="Password"
            typeInp={this.state.visable ? "test" : "password"}
            setValue={val => this.setState({ password: val })}
          />
          <ShowPassword onClick={() => this.setState({ visable: !visable })}>
            {visable ? eye : eyeSlash}
          </ShowPassword>
        </Password>
        <Subm>
          <CustomButton
            text="Exit"
            bgColor={"transparent"}
            brColor={"1px solid #ff5252"}
            textColor={"#ff5252"}
            setClick={() => browserHistory.push("/your-profile")}
          />
          <CustomButton
            text="Save"
            bgColor={"transparent"}
            brColor={"1px solid #4caf4f"}
            textColor={"#4caf4f"}
            setClick={this.saveNewUserData}
          />
        </Subm>
      </div>
    );
  }
}

export default connect(null, { editUser })(EditForm);

const Subm = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: flex-end;
`;
const Password = styled.div`
  position: relative;
`;
const ShowPassword = styled.div`
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translate(0, -50%);
  cursor: pointer;
`;
