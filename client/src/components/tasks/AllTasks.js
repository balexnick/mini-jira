import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components'
import { connect } from 'react-redux'
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import * as CONSTANT from 'constant'
import BtnWithTooltip from 'common/BtnWithTooltip'
import AddTaskModal from 'components/Modal/AddTaskModal'
import Task from './Task'
import { fetchTasks } from 'actions/fetch-tasks'
import { BodyContainer } from 'common/Styled/index'

const AllTasks = ({allTasks, getTasks, modalStatus, openCloseModal}) => {
  React.useEffect(() => {
    getTasks()
  },[getTasks])
  const renderTasks = () => {
    console.log(allTasks)
    // if(allTasks.length === 0) return <NotingDisplay>No tasks yet!</NotingDisplay>
    // return allTasks.map(item => {
    //   const {data, _id} = item
    //   switch (item.status) {
    //     case '1': return <Task key={_id} text={'To do'} data={{data, _id}}/>
    //     case '2': return <Task key={_id} text={'In progress'} data={{data, _id}}/>
    //     case '3': return <Task key={_id} text={'PO QA'} data={{data, _id}}/>
    //     case '4': return <Task key={_id} text={'Done'} data={{data, _id}}/>
    //     default:
    //       return null;
    //   }
    // })
  }
  return (
    <BodyContainer>
      <AddBtn onClick={() => openCloseModal(true)}>
        <BtnWithTooltip text='Create task' left={true} icon={faPlus}/>
      </AddBtn>

      {renderTasks()}
      {modalStatus && <AddTaskModal/>}
    </BodyContainer>
  );
}

const mapStateToProps = store => {
  let allTasks = store[CONSTANT.ALL_TASKS]
  let modalStatus = store[CONSTANT.MODAL]
  return {allTasks, modalStatus}
}

const mapDispatchToProps = dispatch => {
  return {
    getTasks: () => dispatch(fetchTasks()),
    openCloseModal: data => dispatch({type: CONSTANT.MODAL, payload: data})
  };
}
AllTasks.propTypes = {
  // allTasks: PropTypes.array.isRequired,
  getTasks: PropTypes.func.isRequired,
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
  position: fixed;
  background: rgb(17, 82, 147);
  color: #fff;
  border-radius: 50%;
  font-size: 10px;
  font-weight: 300;
  bottom: 20px;
  right: 20px;
`

