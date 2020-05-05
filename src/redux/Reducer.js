import {
  LOAD_USERS_SUCCESS,
  DELETE_USER_SUCCESS,
  UPDATE_USER_SUCCESS,
  ADD_USER_SUCCESS
} from "./types";

const initialState = { users: [], isupdated: true };

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload
      };

    case DELETE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.filter(item => item != action.payload)
      };
    case UPDATE_USER_SUCCESS:
      let index = state.users.findIndex(item => item == action.user);
      console.log(index);
      let newvalue = (state.users[index] = action.updatedvalue);
      console.log(state.users);
      const { users } = state;
      return {
        users,
        isupdated: !state.isupdated
      };
    case ADD_USER_SUCCESS:
      console.log(action.addednewValue);
      const { addednewValue } = action;
      state.users.unshift(addednewValue);
      return {
        users: state.users,
        isupdated: !state.isupdated
      };
    default:
      return state;
  }
}
