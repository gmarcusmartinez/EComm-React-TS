import { UPDATE_COLLECTIONS } from '../actions/types';

const INITIAL_STATE = {
  collections: null,
};

export const shop = (state = INITIAL_STATE, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: payload,
      };
    default:
      return state;
  }
};
