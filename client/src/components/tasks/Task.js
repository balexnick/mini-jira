import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Task = ({text, data}) => {
  return (
    <div>
      <h3>{text}</h3>
      <TaskContainer>
        <div>{data.data.title}</div>
        <div>{data.data.description}</div>
      </TaskContainer>
    </div>
  )
}

export default Task

Task.propTypes = {
  text: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
}

const TaskContainer = styled.div`
  background: rgb(232, 244, 253);
  margin: 5px 0;
`