import { configureStore } from "@reduxjs/toolkit";
import counterReducers from "./counter";
import authReducers from "./auth";

const storeWithToolkit = configureStore({
  reducer: { counter: counterReducers, auth: authReducers },
});

export default storeWithToolkit;
