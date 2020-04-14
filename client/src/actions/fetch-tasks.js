import * as CONSTANT from "constant";
import { requestHandler } from "utils/requestHandler";
import  { filterTasks } from 'utils/filterTasks'
export function fetchTasks() {
  return dispatch => {
    const options = {
      type: "get",
      url: "/tasks",
    };

    const cb = (response) => {
      dispatch({type: CONSTANT.ALL_TASKS, payload: filterTasks(response.data)})
    }
    requestHandler({options, cb})
  };
}
