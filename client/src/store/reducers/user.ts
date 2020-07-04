import { SET_CURRENT_USER } from '../actions/types';

const initialState = {
  currentUser: null,
};

export const user = (state = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      return state;
  }
};
