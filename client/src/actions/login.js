import { browserHistory } from "../index";
import { requestHandler } from "../utils/requestHandler";
// import cookies from "js-cookie";
import { toast } from "react-toastify";

export function login(data) {
  return dispatch => {
    const options = {
      type: "post",
      url: "/login",
      data
    };
    const cb = (response) => {
      // cookies.set("token", response.data.token, { expires: 365 });
      // cookies.set("userId", response.data.id, { expires: 365 });
      localStorage.setItem("token", response.data.token)
      localStorage.setItem("userId", response.data.id)
      browserHistory.push("/");
      toast.success(response.data.message);
    }
    requestHandler({options, cb})
  };
}
