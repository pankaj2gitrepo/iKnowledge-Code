const { createSlice } = require("@reduxjs/toolkit");

const initialCartState = { showCart: false };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addCart(state) {
      console.log("addCart in reducers");
      state.showCart = !state.showCart;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
