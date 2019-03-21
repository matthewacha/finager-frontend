import { call } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';

import AuthenticationApi from '../../../services/Authenticate';
import { USER_LOGIN_SUCCESS, USER_LOGIN, USER_LOGIN_FAILURE } from '../../../actionTypes';
import { watchLoginUser } from '../index';

describe('Automation Saga', () => {
  const response = {
        token: 'trtryrr657575hhs',
        message: 'Successfully login',
        status: 200,
      };

  const error = { error: 'Failed to load'}



  it('should login successfully', () => expectSaga(watchLoginUser)
    .provide([
      [call(AuthenticationApi.loginUser, JSON.stringify({access_token: '354tr673'})), response],
    ])
    .put({
      type: USER_LOGIN_SUCCESS,
      data: {
        token: 'trtryrr657575hhs',
        message: 'Successfully login',
        status: 200,
      },
    })
    .dispatch({
      type: USER_LOGIN,
      data: JSON.stringify({access_token: '354tr673'})
    })
    .silentRun());

    it('should throw error when login fails', () => expectSaga(watchLoginUser)
    .provide([
      [call(AuthenticationApi.loginUser, JSON.stringify({access_token: '354tr673'})), throwError(error)],
    ])
    .put({
      type: USER_LOGIN_FAILURE,
      error,
    })
    .dispatch({
      type: USER_LOGIN,
      data: JSON.stringify({access_token: '354tr673'})
    })
    .silentRun());
});
