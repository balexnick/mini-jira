import React from 'react';
import CustomModal from './CustomModal';
import CustomInput from 'common/CustomInput';
import Textarea from 'common/CustomTextarea';
import CustomButton from 'common/CustomButton';
import { createTask } from 'actions/create-task';
import { connect } from 'react-redux'
import PropTypes from "prop-types";

const AddTaskModal = ({create}) => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('')
  return (
    <CustomModal>
      <CustomInput
        value={title}
        placeholder="Task title"
        type="text"
        setValue={val => setTitle(val)}
      />
      <Textarea
        value={description}
        placeholder={"Task description"}
        setValue={val => setDescription(val)}
      />
      <CustomButton
        style={{marginTop: '10px'}}
        text={"Create"}
        setClick={() => create({title, description})}
      />
    </CustomModal>
  )
}

AddTaskModal.propTypes = {
  create: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => {
  return{
    create: data => dispatch(createTask(data))
  }
}

export default connect(null, mapDispatchToProps)(AddTaskModal)


