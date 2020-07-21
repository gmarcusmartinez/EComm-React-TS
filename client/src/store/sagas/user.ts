import { takeLatest, put, all, call } from 'redux-saga/effects';
import * as ActionTypes from 'store/actions/types';
import * as firebaseUtils from 'firebase/firebase.utils';
import * as authActions from 'store/actions/user';

const { auth, googleProvider, createUserProfileDocument } = firebaseUtils;

export function* getSnapshotFromUserAuth(userAuth: any, additionalData?: any) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const snapshot = yield userRef.get();
    yield put(authActions.signinSuccess({ id: snapshot, ...snapshot.data() }));
  } catch (error) {
    yield put(authActions.signinFailure(error.message));
  }
}

export function* signinWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(authActions.signinFailure(error.message));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(ActionTypes.GOOGLE_SIGNIN_START, signinWithGoogle);
}

export function* signinWithEmail({ payload }: any) {
  const { email, password } = payload;
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(authActions.signinFailure(error.message));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(ActionTypes.EMAIL_SIGNIN_START, signinWithEmail);
}
export function* isUserAuthenticated() {
  try {
    const userAuth = yield firebaseUtils.getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(authActions.signinFailure(error));
  }
}
export function* onCheckUserSession() {
  yield takeLatest(ActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signout() {
  try {
    yield auth.signOut();
    yield put(authActions.signoutSuccess());
  } catch (error) {
    yield put(authActions.signoutFailure(error.message));
  }
}
export function* onSignoutStart() {
  yield takeLatest(ActionTypes.SIGNOUT_START, signout);
}

export function* signup({ payload }: any) {
  const { email, password, displayName } = payload;
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(
      authActions.signupSuccess({ user, additionalData: { displayName } })
    );
  } catch (error) {
    yield put(authActions.signupFailure(error.message));
  }
}

export function* onSignupStart() {
  yield takeLatest(ActionTypes.SIGNUP_START, signup);
}

export function* signInAfterSignup({ payload }: any) {
  const { user, additionalData } = payload;
  yield takeLatest(ActionTypes.SIGNUP_START, signup);
  yield getSnapshotFromUserAuth(user, additionalData);
}

export function* onSignupSuccess() {
  yield takeLatest(ActionTypes.SINGUP_SUCCESS, signInAfterSignup);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignoutStart),
    call(onSignupStart),
    call(onSignupSuccess),
  ]);
}
