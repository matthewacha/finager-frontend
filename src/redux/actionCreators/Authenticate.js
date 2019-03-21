import {
  USER_LOGIN,
  USER_LOGIN_FAILURE,
  USER_LOGIN_SUCCESS
} from "../actionTypes";

export const loginUser = (data) => ({
  type: USER_LOGIN,
  data
});

export const loginUserFailure = (error) => ({
  type: USER_LOGIN_FAILURE,
  error
});

export const loginUserSuccess = (data) => ({
  type: USER_LOGIN_SUCCESS,
  data
});
