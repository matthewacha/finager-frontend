import {
  USER_LOGIN,
  GOOGLE_AUTH,
//   GOOGLE_AUTH_SUCCESS,
  GOOGLE_AUTH_FAILURE,
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

export const googleAuth = () => ({
  type: GOOGLE_AUTH
});

// export const googleAuthSuccess = () => ({
//     type: GOOGLE_AUTH_SUCCESS
//   });

export const googleAuthFailure = (error) => ({
    type: GOOGLE_AUTH_FAILURE,
    error
  });
