import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { CustomWindow } from "../../common/Styled/index";
import { browserHistory } from "../../index";
import { RedirectToPage } from "../../common/Styled/index";
import PropTypes from "prop-types";
import * as CONSTANT from '../../constant'
import { currentUser } from "../../actions/authUser";
import { encryptPassword } from "../../utils/encript";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

const UserProfile = ({ userData, fetchCurrentUser }) => {
  React.useEffect(() => {
    fetchCurrentUser()
  }, [])
  const { name, email, password } = userData
  const [visable, setVisable] = React.useState(false);
  const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />;
  const eye = <FontAwesomeIcon icon={faEye} />;
  return (
    <ProfilePage>
      <CustomWindow>
        <UserAvatar>
          {name && name[0].toUpperCase()}
        </UserAvatar>
        <UserInformation>
          <TitleNameEmail>
            <Val>Name:</Val> {name}
          </TitleNameEmail>
          <TitleNameEmail>
            <Val>Email:</Val> {email}
          </TitleNameEmail>
          <UserPassword>
            <Val>Password:</Val>
            <PasswordContainer>
              {visable ? password : encryptPassword(password)}
              <ShowPassword onClick={() => setVisable(!visable)}>
                {visable ? eye : eyeSlash}
              </ShowPassword>
            </PasswordContainer>
          </UserPassword>
          <RedirectToPage
            alignSelf="flex-end"
            onClick={() => browserHistory.push("/edit-your-profile")}
          >
            Edit profile
          </RedirectToPage>
        </UserInformation>
      </CustomWindow>
    </ProfilePage>
  );
};

const mapStateToProps = store => {
  let userData = store[CONSTANT.USER_DATA]
  return {userData}
};

const napDispatchToProps = dispatch => {
  return{
    fetchCurrentUser: () => dispatch(currentUser())
  }
}

export default connect(mapStateToProps, napDispatchToProps)(UserProfile);

UserProfile.propTypes = {
  userData: PropTypes.object.isRequired
};

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

const ProfilePage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
