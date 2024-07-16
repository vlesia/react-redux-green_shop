import { CartItem } from "../../type/CartItem";

// export const saveState = (key: string, state: CartItem[]) => {
//   try {
//     const serializedState = JSON.stringify(state);
//     localStorage.setItem(key, serializedState);
//   } catch (err) {
//   }
// };

// export const loadState = (key: string): CartItem[] | undefined => {
//   try {
//     const serializedState = localStorage.getItem(key);
//     if (serializedState === null) {
//       return undefined;
//     }
//     return JSON.parse(serializedState);
//   } catch (err) {
//     return undefined;
//   }
// };

export const loadCartItems = (): CartItem[] => {
  const cartItems = localStorage.getItem('cartItems');
  return cartItems ? JSON.parse(cartItems) : [];
};

export const saveCartItems = (items: CartItem[]) => {
  localStorage.setItem('cartItems', JSON.stringify(items));
};
