export const addItemToCart = (
  cartItems: any,
  cartItemToAdd: { id: string }
) => {
  const existingCartItem = cartItems.find(
    (cartItem: { id: string }) => cartItem.id === cartItemToAdd.id
  );
  if (existingCartItem)
    return cartItems.map((cartItem: { id: string; quantity: number }) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
