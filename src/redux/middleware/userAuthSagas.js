import { takeLatest, call, put } from 'redux-saga/effects';
import { loginUser } from '../actionCreators';
import { Authentication } from '../services';

export function* watchAuthUser() {
    yield takeLatest(loginUser().type, loginUserSaga);
}

export function* loginUserSaga(action){
    const response = yield call(Authentication.loginUser, action.email)
}