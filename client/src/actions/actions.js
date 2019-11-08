import { browserHistory } from "../index";
import * as CONSTANT from "../constant";
import { requestHandler } from "../utils/requestHandler";
import cookies from 'js-cookie'
import { toast } from "react-toastify";



export function editUser(data) {
  return dispatch => {
    const options = {
      type: "post",
      url: "/editUser",
      data
    };
    requestHandler(options)
      .then(response => {
        console.log(response)
        dispatch({ type: CONSTANT.USER_DATA, payload: response.data.data });
      })
      .catch(err => {
        if (err.response && err.response.data.error.message) {
          toast.error(err.response.data.error.message);
        }
      });
  }
}

export function currentUser() {
  const USER_ID = cookies.get('userId');

  return dispatch => {
    const options = {
      type: "post",
      url: "/find",
      data: { id: USER_ID }
    };
    requestHandler(options)
      .then(response => {
        dispatch({ type: CONSTANT.USER_DATA, payload: response.data[0] });
      })
      .catch(err => {
        if (err.response && err.response.data.error.message) {
          toast.error(err.response.data.error.message);
        }
      });
  };
}

export function register(data) {
  return dispatch => {
    const options = {
      type: "post",
      url: "/register",
      data
    };

    requestHandler(options)
      .then(response => {
        cookies.set("token", response.data.token);
        cookies.set("userId", response.data.id);
        browserHistory.push("/");
        toast.success(response.data.message);
      })
      .catch(err => {
        if (err.response && err.response.data.error.message) {
          toast.error(err.response.data.error.message);
        }
      });
  };
}

export function login(data) {
  return dispatch => {
    const options = {
      type: "post",
      url: "/login",
      data
    };
    requestHandler(options)
      .then(response => {
        cookies.set("token", response.data.token);
        cookies.set("userId", response.data.id);
        browserHistory.push("/");
        toast.success(response.data.message);
      })
      .catch(err => {
        if (err.response && err.response.data.error.message) {
          toast.error(err.response.data.error.message);
        }
        toast.error(err.response.data.message);
      });
  };
}
