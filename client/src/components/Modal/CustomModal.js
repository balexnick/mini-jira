import React from 'react'
import styled from 'styled-components'
import PropTypes from "prop-types";
import {CustomModalStyled} from 'common/Styled/index'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { connect } from 'react-redux'
import * as CONSTANT from 'constant'

const CustomModal = ({children, openCloseModal}) => {
  const close = () => {
    openCloseModal(false)
  }
  return (
    <Cover>
      <CustomModalStyled>
        <Close onClick={close}>
          <FontAwesomeIcon icon={faTimes}/>
        </Close>
        {children}
      </CustomModalStyled>
    </Cover>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    openCloseModal: data => dispatch({type: CONSTANT.MODAL, payload: data})
  }
}

export default connect(null, mapDispatchToProps)(CustomModal)


CustomModal.propTypes = {
  openCloseModal: PropTypes.func.isRequired
};

const Cover = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Close = styled.div`
  color: #bababa7d;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  transition: .3s;
  &:hover{
    color: #bababa
  }
`