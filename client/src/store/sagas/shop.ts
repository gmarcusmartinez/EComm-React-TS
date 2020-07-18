import { takeEvery, call, put } from 'redux-saga/effects';
import { FETCH_COLLECTIONS_START } from '../actions/types';
import * as firebaseUtils from 'firebase/firebase.utils';
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from 'store/actions/shop';

const { firestore, convertCollectionsSnapshotToMap } = firebaseUtils;

export function* fetchCollectionsAsync() {
  yield console.log('fetchCollectionsAsync fired');
}

export function* fetchCollectionStart() {
  try {
    yield takeEvery(FETCH_COLLECTIONS_START, fetchCollectionsAsync);
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}
