import React from 'react';
import { browserHistory } from '../index';
import { connect } from 'react-redux';
import { currentUser } from '../actions/actions';
import CustomButton from '../common/CustomButton'
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
// import UserProfile from '../components/profile/UserProfile'
import AddTask from '../components/tasks/AddTask'
import UserTasks from '../components/tasks/UserTasks'
import { ToastContainer } from "react-toastify";
import EditProfile from '../components/profile/EditProfile'
import PropTypes from 'prop-types';
import UserProfile from '../components/profile/UserProfile'




const USER_TASKS = '/myTasks'
const ADD_TASK = '/addTask'
const USER_PROFILE = '/myProfile'
const EDIT_PROFILE = '/editProfile'

const CONTENT_LIST = [ADD_TASK, USER_TASKS, USER_PROFILE, EDIT_PROFILE]

const HomePage = ({ userData, currentUser, match }) => {
  const hasContent = CONTENT_LIST.includes(match.url)
  const content = {
    [USER_TASKS]: (<UserTasks />),
    [ADD_TASK]: (<AddTask />),
    [USER_PROFILE]: (<UserProfile />),
    [EDIT_PROFILE]: (<EditProfile />)
  }
  React.useEffect(() => currentUser(), [])

  return (
    <div>
      <HeaderContainer>
        <HeaderContent>
          <Title>Hello, {userData.name}</Title>
          <CustomButton
            text="My Tasks"
            bgColor={'transparent'}
            brColor={'1px solid transparent'}
            textColor={'#eee'}
            isActive={match.url === USER_TASKS}
            setClick={() => browserHistory.push('/myTasks')}
          />
          <CustomButton
            text="Add"
            bgColor={'transparent'}
            brColor={'1px solid transparent'}
            textColor={'#eee'}
            isActive={match.url === ADD_TASK}
            setClick={() => browserHistory.push('/addTask')}
          />
          <CustomButton
            text="My Progile"
            bgColor={'transparent'}
            brColor={'1px solid transparent'}
            textColor={'#eee'}
            isActive={match.url === USER_PROFILE}
            setClick={() => browserHistory.push('/myProfile')}
          />
          <CustomButton
            text="logout"
            bgColor={'transparent'}
            brColor={'1px solid #ff5252'}
            textColor={'#ff5252'}
            setClick={() => browserHistory.push('/logout')}
          />
        </HeaderContent>
      </HeaderContainer>
      {hasContent && content[match.url]}
      <ToastContainer autoClose={2000} />
    </div>
  );
}
const mapStateToProps = store => {
  return {
    userData: store.userData,
  };
};

export default withRouter(connect(mapStateToProps, { currentUser })(HomePage));

HomePage.propTypes = {
  userData: PropTypes.object.isRequired,
  currentUser: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired
};

const Title = styled.h1`
  color: #e5e5e5;
`

const HeaderContainer = styled.div`
  background: #24292e;
  padding: 25px 0;
`
const HeaderContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 85vw;
  margin: 0 auto;
`
