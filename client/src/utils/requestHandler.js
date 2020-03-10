import axios from "axios";
import qs from "qs";
// import cookies from 'js-cookie'
import * as CONSTANT from "constant";
import { toast } from "react-toastify";
import { store } from 'index'


export const requestHandler = ({options, cb, failCb}) => {
  // const token = cookies.get("token");
  const token = localStorage.getItem("token");

  let axiosOptions = {
    url: process.env.REACT_APP_API_URL + options.url,
    method: options.type,
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token
    }
  };
  switch (options.type.toLowerCase()) {
    case "get":
      if (options.data) {
        axiosOptions.url += "?" + qs.stringify(options.data);
      }
      break;
    case "put":
    case "post":
    case "delete":
      axiosOptions.data = options.data || {};
      break;
    default:
      break;
  }
  store.dispatch({ type: CONSTANT.LOADER, payload: true })
  return axios(axiosOptions)
    .then(res => {
      if (typeof cb === 'function') cb(res)
      store.dispatch({ type: CONSTANT.LOADER, payload: false })
    })
    .catch(function (err) {
      console.log(err.response)
      if (err.response && err.response.data.message) {
        toast.error(err.response.data.message);
      }
      if (typeof failCb === 'function') failCb(err)
      store.dispatch({ type: CONSTANT.LOADER, payload: false })
    })
};
