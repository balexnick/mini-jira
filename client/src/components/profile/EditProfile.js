import React, { Component } from 'react';
import { CustomWindow } from '../../common/Styled/index';
import styled from 'styled-components';
import UserPicture from '../../assets/profile-photo.png';
import { connect } from 'react-redux';
import EditForm from './EditForm'

class EditProfile extends Component {
  render() {
    const { userData } = this.props
    return (
      <ProfilePage>
        <CustomWindow className='showWindowRight' jusCont="flex-start">
          <Img src={UserPicture} alt="logo" />
          <UserInformation>
            {userData.name && <EditForm testData={userData} />}
          </UserInformation>
        </CustomWindow>
      </ProfilePage >
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
`

const Img = styled.img`
  height: 200px;
  border: 5px solid #989796;
  border-radius: 50%;
`

const UserInformation = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 125px;
`

