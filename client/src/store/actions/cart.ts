import {
  ADD_ITEM,
  REMOVE_ITEM,
  TOGGLE_CART_HIDDEN,
  CLEAR_ITEM_FROM_CART,
} from './types';
import { ICartItem } from '../../interfaces';

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN,
});

export const addItem = (item: ICartItem) => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeItem = (item: ICartItem) => ({
  type: REMOVE_ITEM,
  payload: item,
});

export const clearItemFromCart = (item: ICartItem) => ({
  type: CLEAR_ITEM_FROM_CART,
  payload: item,
});
