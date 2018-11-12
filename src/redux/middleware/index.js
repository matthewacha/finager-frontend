import { all } from 'redux-saga/effects';
import { watchAuthUser } from './userAuthSagas';

function* rootSaga() {
  yield all([
    watchAuthUser(),
  ]);
}

export default rootSaga;
