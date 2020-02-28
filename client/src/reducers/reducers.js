import * as CONSTANT from "../constant";
export const initialState = {
  [CONSTANT.USER_DATA]: {},
  [CONSTANT.LOADER]: false
};

export function rootReduser(state = initialState, action) {
  switch (action.type) {
    case CONSTANT.USER_DATA:
      const { _id, name, email, password } = action.payload
      const data = { name, email, password, id: _id }
      return {
        ...state,
        [CONSTANT.USER_DATA]: data
      }
    case CONSTANT.LOADER: {
      return{
        ...state,
        [CONSTANT.LOADER]: action.payload
      }
    }  
    default:
      return state;
  }
}
