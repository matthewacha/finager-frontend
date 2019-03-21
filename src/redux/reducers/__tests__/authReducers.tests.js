import authenticate from "../auth";
import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN,
  USER_LOGIN_FAILURE
} from "../../actionTypes";

describe("Test authenticate reducer", () => {
  const initialState = {
    userToken: undefined,
    isLoading: false
  };

  it("returns the correct state for USER_LOGIN action", () => {
    const action = {
      type: USER_LOGIN
    };
    expect(authenticate(initialState, action)).toEqual({
      ...initialState,
      isLoading: true
    });
  });

  it("returns the correct state for USER_LOGIN_SUCCESS action", () => {
    const action = {
      type: USER_LOGIN_SUCCESS,
      data: "dhgfi4877dhhvd984h"
    };
    expect(authenticate(initialState, action)).toEqual({
      ...initialState,
      userToken: "dhgfi4877dhhvd984h",
      isLoading: false
    });
  });

  it("returns the correct state for USER_LOGIN_FAILURE action", () => {
    const action = {
      type: USER_LOGIN_FAILURE,
      error: "Something went wrong"
    };
    expect(authenticate(initialState, action)).toEqual({
      ...initialState,
      error: "Something went wrong",
      isLoading: false
    });
  });

  it("returns the correct state for default loading", () => {
    const action = {
      type: "NONE",
      error: "Something went wrong"
    };
    expect(authenticate(initialState, action)).toEqual({
      isLoading: false,
      userToken: undefined
    });
  });
});
