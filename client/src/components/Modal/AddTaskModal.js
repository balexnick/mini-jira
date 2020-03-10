import React from 'react'
import CustomModal from './CustomModal'
import CustomInput from 'common/CustomInput'

const AddTaskModal = props => {
  const [title, setTitle] = React.useState('')
  return (
    <CustomModal>
      <CustomInput
        inpValue={title}
        inputPlaceholder="Task title"
        typeInp="text"
        setValue={val => setTitle(val)}
      />
    </CustomModal>
  )
}

// AddTaskModal.propTypes = {

// }

export default AddTaskModal
