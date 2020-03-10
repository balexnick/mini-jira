import * as CONSTANT from "../constant";
import { requestHandler } from "../utils/requestHandler";
// import cookies from "js-cookie";

export function currentUser() {
  // const USER_ID = cookies.get("userId");
  const USER_ID = localStorage.getItem("userId");
  return dispatch => {
    const options = {
      type: "post",
      url: "/find",
      data: { id: USER_ID }
    };

    const cb =  (response) => {
      dispatch({ type: CONSTANT.USER_DATA, payload: response.data[0] });
    }
    requestHandler({options, cb})
  };
}
