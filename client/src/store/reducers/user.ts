import * as ActionTypes from '../actions/types';

const initialState = {
  currentUser: null,
  error: null,
};

export const user = (state = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.SIGNIN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        error: null,
      };
    case ActionTypes.SINGOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    case ActionTypes.SIGNIN_FAILURE:
    case ActionTypes.SIGNOUT_FAILURE:
    case ActionTypes.SIGNUP_FAILURE:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
};
