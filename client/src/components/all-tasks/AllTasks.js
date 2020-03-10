import React from 'react';
import { fetchTasks } from 'actions/fetch-tasks'
import { connect } from 'react-redux'
import * as CONSTANT from 'constant'
import PropTypes from "prop-types";
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { BodyContainer } from 'common/Styled/index'
import Tooltip from 'common/Tooltip'
import AddTaskModal from 'components/Modal/AddTaskModal'

const AllTasks = ({fetchedTasks, fetchTasksIntoPage, modalStatus, openCloseModal}) => {
  React.useEffect(() => {
    fetchTasksIntoPage()
  },[fetchTasksIntoPage])
  const renderTasks = () => {
    if(fetchedTasks.length === 0) return <NotingDisplay>No tasks yet!</NotingDisplay>
    return <div>some tasks are available</div>
  }

  const openModal = () => {
    openCloseModal(true)
  }
  return (
    <BodyContainer>
      <AddBtn onClick={openModal}>
        <FontAwesomeIcon icon={faPlus}/>
        <Tooltip text='Create task' left='-140%' top='50%' x='0' y='-50%'/>
      </AddBtn>
      {renderTasks()}
      {modalStatus && <AddTaskModal/>}
    </BodyContainer>
  );
}

const mapStateToProps = store => {
  let fetchedTasks = store[CONSTANT.ALL_TASKS]
  let modalStatus = store[CONSTANT.MODAL]
  return {fetchedTasks, modalStatus}
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTasksIntoPage: () => dispatch(fetchTasks()),
    openCloseModal: data => dispatch({type: CONSTANT.MODAL, payload: data})
  };
}
AllTasks.propTypes = {
  fetchedTasks: PropTypes.array.isRequired,
  fetchTasksIntoPage: PropTypes.func.isRequired,
  modalStatus: PropTypes.bool.isRequired,
  openCloseModal: PropTypes.func.isRequired
};


export default connect(mapStateToProps, mapDispatchToProps)(AllTasks);

const NotingDisplay = styled.div`
  text-align: center;
  color: rgb(13, 60, 97);
  background-color: rgb(232, 244, 253);
  padding: 16px;
  border-radius: 5px;
`

const AddBtn = styled.div`
  position: absolute;
  cursor: pointer;
  background: rgb(17, 82, 147);
  color:#fff;
  border-radius: 50%;
  display: inline-block;
  padding: 20px 22px;
  font-size: 10px;
  font-weight: 300;
  bottom: 20px;
  right: 0;
`