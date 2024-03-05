import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    receive: (state, action) => {
      state.data = action.payload;
    },
    add: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { receive, add } = userSlice.actions;


export default userSlice.reducer;
