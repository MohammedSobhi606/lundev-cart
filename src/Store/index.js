import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";

const store = configureStore({
  reducer: { cart: CartSlice }, // Define your reducers here
});

export default store; // Export the Redux store instance
