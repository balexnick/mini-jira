import { browserHistory } from "../index";
import { requestHandler } from "../utils/requestHandler";
import cookies from "js-cookie";
import { toast } from "react-toastify";

export function register(data) {
  return dispatch => {
    const options = {
      type: "post",
      url: "/register",
      data
    };

    const cb = (response) => {
      cookies.set("token", response.data.token, { expires: 365 });
      cookies.set("userId", response.data.id, { expires: 365 });
      browserHistory.push("/");
      toast.success(response.data.message);
    }
    requestHandler({options, cb})
  };
}
