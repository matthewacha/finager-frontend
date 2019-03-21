/* istanbul ignore file */
import { all } from 'redux-saga/effects';
import { watchLoginUser } from './userAuthSagas';

function* rootSaga() {
  yield all([
    watchLoginUser(),
  ]);
}

export default rootSaga;
