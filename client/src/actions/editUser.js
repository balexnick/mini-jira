import { browserHistory } from "../index";
import * as CONSTANT from "../constant";
import { requestHandler } from "../utils/requestHandler";
import { toast } from "react-toastify";

export function editUser(data) {
  return dispatch => {
    const options = {
      type: "post",
      url: "/editUser",
      data
    };
    const cb = (response) => {
      dispatch({ type: CONSTANT.USER_DATA, payload: response.data.data });
      toast.success(response.data.message);
      browserHistory.push("/myProfile");
    }
    requestHandler({options, cb})
  };
}