import axios from "axios";
import qs from "qs";
export const requestHandler = options => {
  const token = JSON.parse(localStorage.getItem("token"));

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
  return axios(axiosOptions);
};
