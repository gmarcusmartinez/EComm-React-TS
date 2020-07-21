import { all, call, takeLatest, put } from 'redux-saga/effects';
import { clearCart } from '../actions/cart';
import * as ActionTypes from '../actions/types';

export function* clearCartOnSignout() {
  yield put(clearCart());
}

export function* onSignoutSuccess() {
  yield takeLatest(ActionTypes.SINGOUT_SUCCESS, clearCartOnSignout);
}

export function* cartSagas() {
  yield all([call(onSignoutSuccess)]);
}
