import { browserHistory } from "../index";
import * as CONSTANT from "../constant";
import { requestHandler } from "../utils/requestHandler";

import { toast } from "react-toastify";

export function currentUser(data) {
  return dispatch => {
    const options = {
      type: "post",
      url: "/find",
      data
    };
    requestHandler(options)
      .then(response => {
        dispatch({ type: CONSTANT.USER_NAME, payload: response.data[0].name });
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
        localStorage.setItem("token", JSON.stringify(response.data.token));
        localStorage.setItem("userId", JSON.stringify(response.data.id));
        dispatch({ type: CONSTANT.USER_NAME, payload: response.data.name });
        browserHistory.push("/");
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
        localStorage.setItem("token", JSON.stringify(response.data.token));
        localStorage.setItem("userId", JSON.stringify(response.data.id));
        dispatch({ type: CONSTANT.USER_NAME, payload: response.data.name });
        browserHistory.push("/");
      })
      .catch(err => {
        if (err.response && err.response.data.error.message) {
          toast.error(err.response.data.error.message);
        }
        toast.error(err.response.data.message);
      });
  };
}
