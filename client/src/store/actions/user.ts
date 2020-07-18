import * as ActionTypes from './types';

export const setCurrentUser = (user: any) => ({
  type: ActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const googleSigninStart = () => ({
  type: ActionTypes.GOOGLE_SIGNIN_START,
});

export const googleSigninSuccess = (user: any) => ({
  type: ActionTypes.GOOGLE_SIGNIN_SUCCESS,
  payload: user,
});

export const googleSigninFailure = (error: string) => ({
  type: ActionTypes.GOOGLE_SIGNIN_FAILURE,
  payload: error,
});

export const emailSigninStart = (formData: any) => ({
  type: ActionTypes.EMAIL_SIGNIN_START,
  payload: formData,
});

export const emaiSigninSuccess = (user: any) => ({
  type: ActionTypes.EMAIL_SIGNIN_SUCCESS,
  payload: user,
});

export const emaiSigninFailure = () => ({
  type: ActionTypes.EMAIL_SIGNIN_FAILURE,
});
