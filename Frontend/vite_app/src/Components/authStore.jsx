import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice.jsx";

const store = configureStore({
  reducer: {
    auth: authReducer, // Registering the auth reducer
  },
});

export default store;