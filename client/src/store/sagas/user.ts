import { takeLatest, put, all, call } from 'redux-saga/effects';
import * as ActionTypes from 'store/actions/types';
import * as firebaseUtils from 'firebase/firebase.utils';
import { googleSigninSuccess, googleSigninFailure } from 'store/actions/user';
const { auth, googleProvider, createUserProfileDocument } = firebaseUtils;

export function* signinWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const snapshot = yield userRef.get();
    yield put(googleSigninSuccess({ id: snapshot, ...snapshot.data() }));
  } catch (error) {
    yield put(googleSigninFailure(error.message));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(ActionTypes.GOOGLE_SIGNIN_START, signinWithGoogle);
}

export function* userSaga() {
  yield all([call(onGoogleSignInStart)]);
}
