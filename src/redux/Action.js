import axios from "axios";
import * as types from "./types";

export function deleteUserSuccess(payload) {
  return {
    type: types.DELETE_USER_SUCCESS,
    payload
  };
}

export function updateUserSuccess(payload) {
  const {
    user: { phone: telefon },
    name,
    surname,
    email,
    gender,
    phone
  } = payload;

  return {
    type: types.UPDATE_USER_SUCCESS,
    telefon,
    name,
    surname,
    gender,
    email,
    phone
  };
}

export function addUserSuccess(payload) {
  return {
    type: types.ADD_USER_SUCCESS,
    payload
  };
}

export function loadUsersSuccess(payload) {
  return {
    type: types.LOAD_USERS_SUCCESS,
    payload
  };
}
export function loadUsers() {
  return function(dispatch) {
    return axios
      .get(`https://randomuser.me/api/?results=100`)
      .then(response => {
        console.log(response.data.results);
        dispatch(loadUsersSuccess(response.data.results));
      });
  };
}
