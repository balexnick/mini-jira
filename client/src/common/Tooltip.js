import React from 'react';
import styled from 'styled-components';
// import PropTypes from "prop-types";
const Tooltip = ({text, left, top, x, y}) => {
  return (
    <TooltipBlock left={left} top={top} x={x} y={y}>
      {text}
    </TooltipBlock>
  )
}


// Tooltip.propTypes = {
//   text: PropTypes.string.isRequired,
//   position: propTypes.string.isRequired
// }

export default Tooltip

const TooltipBlock = styled.div`
  position: absolute;
  background: rgba(0,0,0, 0.8);
  white-space: nowrap;
  font-size: 12px;
  border-radius: 3px;
  padding: 3px 5px;
  top: ${({top}) => top ? top : 'initial'};
  right: ${({right}) => right ? right : 'initial'};
  bottom: ${({bottom}) => bottom ? bottom : 'initial'};
  left: ${({left}) => left ? left : 'initial'};
  transform: ${({x,y})=> `translate(${x}, ${y})`}
`