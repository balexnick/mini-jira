import React from "react";
import { browserHistory } from "../index";
import { withRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks, faColumns, faUsers, faListAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import PropTypes from "prop-types";
import EditProfile from "../components/profile/EditProfile";
import UserProfile from "../components/profile/UserProfile";
import NavbarButton from "../common/NavbarButton";
import UserWork from "../components/user-tasks/UserWork"
import Dashboard from "../components/dashboard/Dashboard"
import Users from "../components/users/Users"
import AllTasks from "../components/all-tasks/AllTasks"

const USER_WORK = '/your-work'
const DASHBOARD = "/dashboard";
const USERS = "/users";
const ALL_TASKS = "/all-tasks";
const USER_PROFILE = "/your-profile";
const USER_EDIT = "/edit-your-profile";

const CONTENT_LIST = [USER_WORK, DASHBOARD, USERS, ALL_TASKS, USER_PROFILE, USER_EDIT];

const HomePage = ({match }) => {
  const hasContent = CONTENT_LIST.includes(match.url);
  const content = {
    [USER_WORK]: <UserWork />,
    [DASHBOARD]: <Dashboard />,
    [USERS]: <Users />,
    [ALL_TASKS]: <AllTasks />,
    [USER_PROFILE]: <UserProfile />,
    [USER_EDIT]: <EditProfile />
  };
  return (
    <UserHomePage>
      <NavberContainer>
        <NavbarContent>
          <NavbarButton
            text="Your work"
            isActive={match.url === USER_WORK}
            setClick={() => browserHistory.push("/your-work")}
          >
            <FontAwesomeIcon icon={faTasks} />
          </NavbarButton>
          <NavbarButton
            text="Dashboard"
            isActive={match.url === DASHBOARD}
            setClick={() => browserHistory.push("/dashboard")}
          >
            <FontAwesomeIcon icon={faColumns} />
          </NavbarButton>
          <NavbarButton
            text="Users"
            isActive={match.url === USERS}
            setClick={() => browserHistory.push("/users")}
          >
            <FontAwesomeIcon icon={faUsers} />
          </NavbarButton>
          <NavbarButton
            text="All tasks"
            isActive={match.url === ALL_TASKS}
            setClick={() => browserHistory.push("/all-tasks")}
          >
            <FontAwesomeIcon icon={faListAlt} />
          </NavbarButton>
          <NavbarButton
            text="My Profile"
            isActive={match.url === USER_PROFILE || match.url === USER_EDIT}
            setClick={() => browserHistory.push("/your-profile")}
          >
            <FontAwesomeIcon icon={faUser} />
          </NavbarButton>
        </NavbarContent>
        <NavbarButton
          text="logout"
          setClick={() => browserHistory.push("/logout")}
        />
      </NavberContainer>
      {hasContent && content[match.url]}
      <ToastContainer autoClose={2000} />
    </UserHomePage >
  );
};

export default withRouter(HomePage);

HomePage.propTypes = {
  match: PropTypes.object.isRequired
};
const UserHomePage = styled.div`
  display: flex;
  justify-content: space-between;
`
const NavbarContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const NavberContainer = styled(NavbarContent)`
  background: #0747a6;
  height: 100vh;
  justify-content: space-between
`;

