import { CartItem } from "../../type/CartItem";

export const getTotalAmount = (cartItems: CartItem[]) => {
  return cartItems.reduce(
    (total, item) => total + (item.price * item.quantity),
    0
  );
};