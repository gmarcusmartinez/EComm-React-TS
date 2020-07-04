import { TOGGLE_CART_HIDDEN, ADD_ITEM } from '../actions/types';
import { addItemToCart } from '../../utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

export const cart = (state = INITIAL_STATE, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload),
      };
    default:
      return state;
  }
};
