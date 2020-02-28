import React from 'react';
import {connect} from 'react-redux'
import PropTypes from "prop-types";
import * as CONSTANT from '../constant'

const Loader = ({loader}) => {
  if(!loader) return null
  return (
    <div className="lds-dual-ring"></div>
  )
}

Loader.propTypes = {
  loader: PropTypes.bool.isRequired,
}


const mapStateToProps = state => {
  const loader = state[CONSTANT.LOADER];
  return {loader}
}

export default connect(mapStateToProps)(Loader)