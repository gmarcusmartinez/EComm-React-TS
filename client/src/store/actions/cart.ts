import * as ActionTypes from './types';
import { ICartItem } from '../../interfaces';

export const toggleCartHidden = () => ({
  type: ActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item: ICartItem) => ({
  type: ActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item: ICartItem) => ({
  type: ActionTypes.REMOVE_ITEM,
  payload: item,
});

export const clearItemFromCart = (item: ICartItem) => ({
  type: ActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});
export const clearCart = () => ({
  type: ActionTypes.CLEAR_CART,
});
