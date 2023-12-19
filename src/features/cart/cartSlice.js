import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../data";

const initialState = {
  cartItem: data,
  amount: 1,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItem = [];
      state.amount = 0;
    },

    removeItem: (state, action) => {
      const id = action.payload;
      state.cartItem = state.cartItem.filter((item) => item.id !== id);
    },

    totalPrice: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItem.forEach((item) => {
        total += item.price * item.qty;
        amount += item.qty;
      });
      state.amount = amount;
      state.total = total;
    },

    increase: (state, { payload }) => {
      const it = state.cartItem.find((item) => item.id === payload);
      it.qty = it.qty + 1;
    },
    decrease: (state, { payload }) => {
      const it = state.cartItem.find((item) => item.id === payload);
      console.log(it);
      it.qty = it.qty - 1;
    },
  },
});

// console.log(cartSlice);

export const { clearCart, removeItem, totalPrice, increase, decrease } =
  cartSlice.actions;

export default cartSlice.reducer;
