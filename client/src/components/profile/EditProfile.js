import React, { Component } from "react";
import { CustomWindow } from "../../common/Styled/index";
import styled from "styled-components";
import UserPicture from "../../assets/profile-photo.png";
import { connect } from "react-redux";
import EditForm from "./EditForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
class EditProfile extends Component {
  render() {
    const { userData } = this.props;
    return (
      <ProfilePage>
        <CustomWindow className="showWindowRight" jusCont="flex-start">
          <LogoPhoto>
            <Img src={UserPicture} alt="logo" />
            <AddHover className="test">
              <FontAwesomeIcon icon={faSearchPlus} />
            </AddHover>
          </LogoPhoto>
          <UserInformation>
            {userData.name && <EditForm testData={userData} />}
          </UserInformation>
        </CustomWindow>
      </ProfilePage>
    );
  }
}

const mapStateToProps = store => {
  return {
    userData: store.userData
  };
};

export default connect(mapStateToProps, null)(EditProfile);

const ProfilePage = styled.div`
  padding-top: 10%;
`;

const Img = styled.img`
  height: 200px;
  margin-bottom: -5px;
`;

const LogoPhoto = styled.div`
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  border: 5px solid #989796;
  &:hover .test {
    bottom: 0;
  }
`;

const AddHover = styled.div`
  cursor: pointer;
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  bottom: -30%;
  left: 0;
  right: 0;
  text-align: center;
  padding: 10px 0;
  font-size: 30px;
  color: #212121;
  transition: 0.5s;
`;

const UserInformation = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
`;
