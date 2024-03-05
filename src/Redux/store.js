import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../Redux/reducer";

export const store = configureStore({
  reducer: {
    userData: userSlice,
  },
});
