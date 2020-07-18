import * as ActionTypes from '../actions/types';

const INITIAL_STATE = {
  collections: null,
  loading: true,
  errorMessage: undefined,
};

export const shop = (state = INITIAL_STATE, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        collections: payload,
      };
    case ActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: payload,
      };
    default:
      return state;
  }
};
