import { configureStore } from "@reduxjs/toolkit";
import cartReducers from "./cart-slice";
import uiReducers from "./ui-slice";

const store = configureStore({
  reducer: { ui: uiReducers, cart: cartReducers },
});

export default store;
