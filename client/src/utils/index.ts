export const addItemToCart = (
  cartItems: any,
  cartItemToAdd: { id: number }
) => {
  const existingCartItem = cartItems.find(
    (cartItem: { id: number }) => cartItem.id === cartItemToAdd.id
  );
  if (existingCartItem)
    return cartItems.map((cartItem: { id: number; quantity: number }) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (
  cartItems: any,
  cartItemToRemove: { id: number }
) => {
  const existingCartItem = cartItems.find(
    (cartItem: { id: number }) => cartItem.id === cartItemToRemove.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter(
      (cartItem: { id: number }) => cartItem.id !== cartItemToRemove.id
    );
  }
  return cartItems.map((cartItem: { id: number; quantity: number }) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
