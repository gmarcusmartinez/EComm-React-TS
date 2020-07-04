import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_ITEM_FROM_CART,
} from '../actions/types';
import { addItemToCart, removeItemFromCart } from '../../utils';
import { ICartItem } from '../../interfaces';

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
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, payload),
      };

    case CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (c: ICartItem) => c.id !== payload.id
        ),
      };
    default:
      return state;
  }
};
