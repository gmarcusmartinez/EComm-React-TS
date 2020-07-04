import { createSelector } from 'reselect';

const selectCart = (state: any) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((acc: any, curr: any) => acc + curr.quantity, 0)
);
