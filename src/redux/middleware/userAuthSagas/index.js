import { takeLatest, call, put } from "redux-saga/effects";
import {
  loginUser,
  loginUserFailure,
  loginUserSuccess,
} from "../../actionCreators";
import AuthenticationApi from "../../services/Authenticate";


export function* watchLoginUser() {
  yield takeLatest(loginUser().type, loginUserSaga);
}

export function* loginUserSaga(action) {
  try{
    const response = yield call(AuthenticationApi.loginUser, action.data);
    yield put(loginUserSuccess(response));

  }catch(error){
      yield put(loginUserFailure(error));
  }
}
