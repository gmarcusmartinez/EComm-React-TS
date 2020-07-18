import * as ActionTypes from '../actions/types';

const initialState = {
  currentUser: null,
  error: null,
};

export const user = (state = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.EMAIL_SIGNIN_SUCCESS:
    case ActionTypes.GOOGLE_SIGNIN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        error: null,
      };
    case ActionTypes.EMAIL_SIGNIN_FAILURE:
    case ActionTypes.GOOGLE_SIGNIN_FAILURE:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
};
