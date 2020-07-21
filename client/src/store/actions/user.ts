import * as ActionTypes from './types';
import { IEamilSigninFormData } from 'interfaces';

export const checkUserSession = () => ({
  type: ActionTypes.CHECK_USER_SESSION,
});

export const googleSigninStart = () => ({
  type: ActionTypes.GOOGLE_SIGNIN_START,
});
export const emailSigninStart = (formData: IEamilSigninFormData) => ({
  type: ActionTypes.EMAIL_SIGNIN_START,
  payload: formData,
});

export const signinSuccess = (user: any) => ({
  type: ActionTypes.SIGNIN_SUCCESS,
  payload: user,
});

export const signinFailure = (error: string) => ({
  type: ActionTypes.SIGNIN_FAILURE,
  payload: error,
});

export const signoutStart = () => ({
  type: ActionTypes.SIGNOUT_START,
});

export const signoutSuccess = () => ({
  type: ActionTypes.SINGOUT_SUCCESS,
});

export const signoutFailure = (err: string) => ({
  type: ActionTypes.SIGNOUT_FAILURE,
  paylod: err,
});

export const signupStart = (formData: any) => ({
  type: ActionTypes.SIGNUP_START,
  payload: formData,
});

export const signupSuccess = (data: any) => ({
  type: ActionTypes.SINGUP_SUCCESS,
  payload: data,
});

export const signupFailure = (err: string) => ({
  type: ActionTypes.SIGNUP_FAILURE,
  paylod: err,
});
