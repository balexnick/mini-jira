import React, { Component } from 'react';
import CustomInput from '../../common/CustomInput'
import CustomButton from '../../common/CustomButton'
import { connect } from 'react-redux';
import { editUser } from '../../actions/actions'
import styled from 'styled-components';

class Test extends Component {
  constructor(props) {
    super(props);
    const { name, email, password, _id } = props.testData
    this.state = { name, email, password, id: _id }
  }
  saveNewUserData = () => {
    const { name, email, password, id } = this.state;
    const data = { name, email, password, id }
    this.props.editUser(data)
  }
  render() {
    const { name, email, password } = this.state
    return (
      <div>
        <CustomInput
          inpValue={name}
          inputPlaceholder="Name"
          typeInp="text"
          setValue={val => this.setState({ name: val })}
        />
        <CustomInput
          inpValue={email}
          inputPlaceholder="Email"
          typeInp="email"
          setValue={val => this.setState({ email: val })}
        />
        <CustomInput
          inpValue={password}
          inputPlaceholder="Password"
          typeInp="password"
          setValue={val => this.setState({ password: val })}
        />
        <Subm>
          <CustomButton
            text="Save"
            bgColor={'transparent'}
            brColor={'1px solid #4caf4f'}
            textColor={'#4caf4f'}
            setClick={this.saveNewUserData} />
        </Subm>

      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editUser: data => dispatch(editUser(data))
  }
}

export default connect(null, mapDispatchToProps)(Test);

const Subm = styled.div`
  padding-top:20px;
  display: flex;
  justify-content: flex-end
`