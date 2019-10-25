import React from 'react';
import { browserHistory } from '../index';
import { connect } from 'react-redux';
import { currentUser } from '../actions/actions';
import CustomButton from '../common/CustomButton'
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import UserProfile from '../components/UserProfile'
import AddTask from '../components/AddTask'
import UserTasks from '../components/UserTasks'

const USER_TASKS = '/myTasks'
const ADD_TASK = '/addTask'
const USER_PROFILE = '/myProfile'

const CONTENT_LIST = [ADD_TASK, USER_TASKS, USER_PROFILE]

const HomePage = ({ userName, currentUser, match }) => {
  const hasContent = CONTENT_LIST.includes(match.url)
  const content = {
    [USER_TASKS]: (<UserTasks />),
    [ADD_TASK]: (<AddTask />),
    [USER_PROFILE]: (<UserProfile />)
  }
  React.useEffect(() => {
    const USER_ID = localStorage.getItem("userId");
    currentUser({ id: JSON.parse(USER_ID) });
  })
  return (
    <div>
      <HeaderContainer>
        <HeaderContent>
          <Title>Hello, {userName}</Title>
          <CustomButton
            text="My Tasks"
            white
            isActive={match.url === USER_TASKS}
            setClick={() => browserHistory.push('/myTasks')}
          />
          <CustomButton
            white
            text="Add"
            isActive={match.url === ADD_TASK}
            setClick={() => browserHistory.push('/addTask')}
          />
          <CustomButton
            text="My Progile"
            white
            isActive={match.url === USER_PROFILE}
            setClick={() => browserHistory.push('/myProfile')}
          />
          <CustomButton
            text="logout"
            setClick={() => browserHistory.push('/logout')}
          />
        </HeaderContent>
      </HeaderContainer>
      {hasContent && content[match.url]}
    </div>
  );
}
const mapStateToProps = store => {
  return {
    userName: store.userName
  };
};
export default withRouter(connect(mapStateToProps, { currentUser })(HomePage));

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
