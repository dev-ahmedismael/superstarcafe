import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    increaseQuantity: (state, action) => {
      let foundItem = state.cart.find((e) => e.id === action.payload);
      foundItem.quantity++;
    },
    decreaseQuantity: (state, action) => {
      let foundItem = state.cart.find((e) => e.id === action.payload);
      foundItem.quantity > 1 && foundItem.quantity--;
    },
    removeItem: (state, action) => {
      let filteredCart = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = filteredCart;
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeItem } =
  cartSlice.actions;

export default cartSlice.reducer;
