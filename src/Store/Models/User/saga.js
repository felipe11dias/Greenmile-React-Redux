import api from '../../../Service/api';
import { call, put, all, takeLatest } from 'redux-saga/effects';

import { addToUserSuccess } from './actions';

import history from '../../../Service/history';

function* addToUser ({name}) {
   console.log('saga before call');
   
   try {
      const response = yield call(api.get, `/users/${name}`);
      yield put(addToUserSuccess(response.data));
      console.log('saga');
      history.push('/user/profile');
      window.location.reload();
   } catch(error) {
      console.log('error ' + error);
      yield put(addToUserSuccess());
   }
}

export default all([
   takeLatest('@user/USER_REQUEST', addToUser)
]);