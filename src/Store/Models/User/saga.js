import api from '../../../Service/api';
import { call, put, all, takeLatest } from 'redux-saga/effects';

import { addToUserSuccess, addToUserFailed } from './actions';

import history from '../../../Service/history';

function* addToUser ({name}) {
   console.log('veio pelo user_request');

   try {
      const response = yield call(api.get, `/users/${name}`);
      //console.log(response.data);
      const user = response.data;
      //console.log(user);
      yield put(addToUserSuccess(user));
      // history.push('/user/profile');
      // window.location.reload();
   } catch(error) {
      console.log(error);
      yield put(addToUserFailed());
   }
}

export default all([
   takeLatest('@user/USER_REQUEST', addToUser)
]);