import { all, call } from 'redux-saga/effects';
import { fetchCollectionStart } from './shop';
import { userSaga } from './user';

export default function* rootSaga() {
  yield all([call(fetchCollectionStart), call(userSaga)]);
}
