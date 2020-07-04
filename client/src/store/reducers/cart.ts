import { TOGGLE_CART_HIDDEN } from '../actions/types';

const INITIAL_STATE = {
  hidden: true,
};

export const cart = (state = INITIAL_STATE, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};
