import * as CONSTANT from "../constant";
export const initialState = {
  userName: "",
  userData: {}
};

export function rootReduser(state = initialState, action) {
  switch (action.type) {
    case CONSTANT.USER_DATA:
      const { _id, name, email, password } = action.payload
      const data = { name, email, password, id: _id }
      return {
        ...state,
        userData: data
      }
    default:
      return state;
  }
}
