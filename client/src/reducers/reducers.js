import * as CONSTANT from "../constant";
export const initialState = {
  userName: "",
  userData: {}
};

export function rootReduser(state = initialState, action) {
  switch (action.type) {
    case CONSTANT.USER_DATA:
      return {
        ...state,
        userData: action.payload
      }
    default:
      return state;
  }
}
