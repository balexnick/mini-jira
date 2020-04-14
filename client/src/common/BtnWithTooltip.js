import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BtnWithTooltip = ({text, left=false, right=false, icon}) => {
  return (
    <BtnContainer>
      <FontAwesomeIcon icon={icon}/>
      <TooltipBlock className="show-tooltip" right={right} left={left}>
        {text}
      </TooltipBlock>
    </BtnContainer>
  )
}


BtnWithTooltip.propTypes = {
  text: PropTypes.string.isRequired,
}

export default BtnWithTooltip

const BtnContainer = styled.div`
  display: inline-block;
  padding: 20px 22px;
  position: relative;
  cursor: pointer;
  &:hover .show-tooltip{
    display: inline-block;
  }
`

const TooltipBlock = styled.div`
  position: absolute;
  background: rgba(0,0,0, 0.8);
  white-space: nowrap;
  font-size: 12px;
  border-radius: 3px;
  padding: 3px 5px;
  top: 50%;
  transform: translate(0, -50%);
  right: ${({right}) => right ? "-60px" : 'inherit'};
  left: ${({left}) => left ? "-60px" : 'inherit'};
  display: none;
  color: #fff;
  &:hover{
    display: none;
  }
`