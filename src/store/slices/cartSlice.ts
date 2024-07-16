import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from '../../type/CartItem';
import { loadCartItems, saveCartItems } from '../../utils/helpers/localStorage';

interface CartState {
  items: CartItem[];
};

const initialState: CartState = {
  items: loadCartItems(),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      state.items.push(action.payload);
      saveCartItems(state.items);
    },
    setQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const item = state.items.find(item => item.productId === productId);
      if (item) {
        item.quantity = quantity;
        saveCartItems(state.items);
      }
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter(item => item.productId !== action.payload);
      saveCartItems(state.items);
    },

    clearCart(state) {
      state.items = [];
      localStorage.removeItem('cartItems');
    },
  },
});

export const { addItem, removeItem, setQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

