import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { currentUser } from "../actions/actions";
class HomaPage extends Component {
  state = {};
  componentDidMount() {
    const USER_ID = localStorage.getItem("userId");
    this.props.currentUser({ id: JSON.parse(USER_ID) });
  }
  render() {
    const { userName } = this.props;
    return (
      <div>
        <h1>Hello {userName}</h1>
        <Link to="/logout">CLICK</Link>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    userName: store.userName
  };
};

const mapDispatchToProps = dispatch => {
  return {
    currentUser: data => dispatch(currentUser(data))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomaPage);
