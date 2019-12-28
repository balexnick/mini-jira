import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import UserPicture from "../../assets/profile-photo.png";
import { CustomWindow } from "../../common/Styled/index";
import { browserHistory } from "../../index";
import { RedirectToPage } from "../../common/Styled/index";
import PropTypes from "prop-types";
import { currentUser } from "../../actions/actions";
import { encryptPassword } from "../../utils/encript";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

const UserProfile = ({ userData }) => {
  const [visable, setVisable] = React.useState(false);
  const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />;
  const eye = <FontAwesomeIcon icon={faEye} />;
  return (
    <ProfilePage>
      <CustomWindow className="showWindowLeft" jusCont="flex-start">
        <Img src={UserPicture} alt="logo" />
        <UserInformation>
          <TitleNameEmail>
            <Val>Name:</Val> {userData.name}
          </TitleNameEmail>
          <TitleNameEmail>
            <Val>Email:</Val> {userData.email}
          </TitleNameEmail>
          <UserPassword>
            <Val>Password:</Val>
            <PasswordContainer>
              {visable ? userData.password : encryptPassword(userData.password)}
              <ShowPassword onClick={() => setVisable(!visable)}>
                {visable ? eye : eyeSlash}
              </ShowPassword>
            </PasswordContainer>
          </UserPassword>
          <RedirectToPage
            alignSelf="flex-end"
            onClick={() => browserHistory.push("/editProfile")}
          >
            Edit profile
          </RedirectToPage>
        </UserInformation>
      </CustomWindow>
    </ProfilePage>
  );
};

const mapStateToProps = store => {
  return {
    userData: store.userData
  };
};

export default connect(mapStateToProps, { currentUser })(UserProfile);

UserProfile.propTypes = {
  userData: PropTypes.object.isRequired
};

const ProfilePage = styled.div`
  padding-top: 10%;
`;

const Img = styled.img`
  height: 200px;
  border: 5px solid #989796;
  border-radius: 50%;
`;

const UserInformation = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  width: 54%;
`;

const TitleNameEmail = styled.div`
  margin: 0 0 20px 0;
  font-size: 20px;
  display: flex;
`;
const UserPassword = styled(TitleNameEmail)`
  display: flex;
  align-items: center;
`;

const ShowPassword = styled.div`
  cursor: pointer;
  margin-left: 10px;
  font-size: 20px;
`;

const PasswordContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Val = styled.div`
  margin-right: 10px;
`;
