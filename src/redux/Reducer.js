import {
  LOAD_USERS_SUCCESS,
  DELETE_USER_SUCCESS,
  UPDATE_USER_SUCCESS,
  ADD_USER_SUCCESS
} from "./types";

const initialState = { users: [] };

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
      return {
        ...state
      };

    default:
      return state;
  }
}
