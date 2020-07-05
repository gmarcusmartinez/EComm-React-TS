import { ICartItem } from '../interfaces';

export const addItemToCart = (cartItems: any, cartItemToAdd: ICartItem) => {
  const existingCartItem = cartItems.find(
    ({ id }: ICartItem) => id === cartItemToAdd.id
  );

  if (existingCartItem)
    return cartItems.map((cartItem: ICartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (
  cartItems: ICartItem[],
  cartItemToRemove: ICartItem
) => {
  const existingCartItem = cartItems.find(
    ({ id }: ICartItem) => id === cartItemToRemove.id
  );

  if (existingCartItem?.quantity === 1) {
    return cartItems.filter(({ id }: ICartItem) => id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem: ICartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
