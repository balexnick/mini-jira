import * as CONSTANT from "../constant";
export const initialState = {
  userName: ""
};

export function rootReduser(state = initialState, action) {
  switch (action.type) {
    case CONSTANT.USER_NAME:
      return {
        ...state,
        userName: action.payload
      };
    default:
      return state;
  }
}
