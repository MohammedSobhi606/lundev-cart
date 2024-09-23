import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: localStorage.getItem("carts")
      ? JSON.parse(localStorage.getItem("carts"))
      : [],

    statusTab: false,
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, quantity } = action.payload;
      const existProductId = state.items.findIndex((item) => item.id === id);

      if (existProductId >= 0) {
        state.items[existProductId].quantity += quantity;
      } else {
        state.items.push({ id, quantity });
      }
      localStorage.setItem("carts", JSON.stringify(state.items));
    },
    changeQuantity(state, action) {
      const { productId, quantity } = action.payload;
      const indexProductId = state.items.findIndex(
        (item) => item.productId === productId
      );
      if (quantity > 0) {
        state.items[indexProductId].quantity = quantity;
      } else {
        state.items = state.items.filter(
          (item) => item.productId !== productId
        );
      }
      localStorage.setItem("carts", JSON.stringify(state.items));
    },
    toggleStatusTab(state) {
      if (state.statusTab === false) {
        state.statusTab = true;
      } else {
        state.statusTab = false;
      }
    },
  },
});

export const { addToCart, toggleStatusTab, changeQuantity } = CartSlice.actions;
export default CartSlice.reducer;
