import React, { Component } from "react";
import { CustomWindow } from "common/Styled/index";
import styled from "styled-components";
import { connect } from "react-redux";
import EditForm from "./EditForm";
import * as CONSTANT from 'constant'

class EditProfile extends Component {
  render() {
    const { name } = this.props.userData;
    return (
      <ProfilePage>
        <CustomWindow>
          <UserAvatar>
            {name && name[0].toUpperCase()}
          </UserAvatar>
          <UserInformation>
            {name && <EditForm testData={this.props.userData} />}
          </UserInformation>
        </CustomWindow>
      </ProfilePage>
    );
  }
}

const mapStateToProps = store => {
  let userData = store[CONSTANT.USER_DATA]
  return {userData}
};

export default connect(mapStateToProps, null)(EditProfile);

const ProfilePage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserAvatar = styled.div`
  height: 132px;
  width: 132px;
  border-radius: 50%;
  background: #00a4be;
  color: #182d51;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 70px;
`;

const UserInformation = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
`;
