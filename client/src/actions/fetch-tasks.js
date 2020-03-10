import * as CONSTANT from "../constant";
import { requestHandler } from "../utils/requestHandler";

export function fetchTasks() {
  return dispatch => {
    const options = {
      type: "get",
      url: "/tasks",
    };

    const cb = (response) => {
      dispatch({type: CONSTANT.ALL_TASKS, payload: response.data})
    }
    requestHandler({options, cb})
  };
}
