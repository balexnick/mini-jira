import React from 'react';
import styled from 'styled-components';
import TasksToDo from './TasksToDo'
import TasksInProcess from './TasksInProcess'
import DoneTasks from './DoneTasks'

const Tabs = ({ selected, children }) => {
  const [select, setSelect] = React.useState(selected)
  return (
    <TabContainer>
      <TabList>
        {children.map((elem, index) => {
          return (<TabTitle isActive={index === select} key={index} onClick={() => setSelect(index)}>{elem.props.title}</TabTitle>)
        })}
      </TabList>
      <Tab>{children[select]}</Tab>
    </TabContainer>
  );
}


const Panel = ({ children }) => {
  return <div>{children}</div>
}


const UserTasks = () => {
  return (
    <Tabs selected={0}>
      <Panel title="All Tasks">
        <TasksToDo />
      </Panel>
      <Panel title="In Proces">
        <TasksInProcess />
      </Panel>
      <Panel title="Done">
        <DoneTasks />
      </Panel>
    </Tabs>
  );
}

export default UserTasks;


const TabContainer = styled.div`
  width: 80vw;
  margin: 50px auto 0; 
`

const Tab = styled.div`
  min-height: 50px;
  padding: 25px;
  font-family: sans-serif;
  color: #444;
`

const TabList = styled.div`
  display: flex;
`

const TabTitle = styled.div`
  width: 100%;  
  padding: 10px;
  border-bottom: ${({ isActive }) => `2px solid ${isActive ? '#337ab7' : '#eee'}`};
  transition: all .5s;
  font-family: sans-serif;
  font-weight: 300;
  cursor: pointer;
  color: ${({ isActive }) => `${isActive ? '#444' : '#aaa'}`};
  text-align: center;
`