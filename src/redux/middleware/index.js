import { all } from 'redux-saga/effects';
import { watchAuthUser, watchLoginUser } from './userAuthSagas';

function* rootSaga() {
  yield all([
    watchAuthUser(),
    watchLoginUser(),
  ]);
}

export default rootSaga;
