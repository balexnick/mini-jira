import * as CONSTANT from "../constant";
import { requestHandler } from "../utils/requestHandler";
import { toast } from "react-toastify";
import { fetchTasks } from './fetch-tasks'

export function createTask(data) {
  return dispatch => {
    const options = {
      type: "post",
      url: "/create",
      data
    };

    const cb =  (response) => {
      dispatch(fetchTasks())
      dispatch({type: CONSTANT.MODAL, payload: false})
      toast.success(response.data.message)
    }
    requestHandler({options, cb})
  };
}
