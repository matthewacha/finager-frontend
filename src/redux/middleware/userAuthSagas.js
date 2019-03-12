import { takeLatest, call, put } from "redux-saga/effects";
import {
  loginUser,
  loginUserFailure,
  loginUserSuccess,
  googleAuth,
  googleAuthFailure
} from "../actionCreators";
import AuthenticationApi from "../services/Authenticate";

export function* watchAuthUser() {
  yield takeLatest(googleAuth().type, googleAuthenticationSaga);
}

export function* watchLoginUser() {
  yield takeLatest(loginUser().type, loginUserSaga);
}

export function* googleAuthenticationSaga(action) {
  try{
    const response = yield call(AuthenticationApi.googleAuth);
    yield put(loginUser(response.data));
  }catch(error){
    yield put(googleAuthFailure(error));
  }
}

export function* loginUserSaga(action) {
  try{
    const response = yield call(AuthenticationApi.loginUser, action.data);
    yield put(loginUserSuccess(response));

  }catch(error){
      yield put(loginUserFailure(error));
  }
}
