import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
  name: "videos",
  initialState: [],
  reducers: {
    add(state, action) {
      return [...action.payload];
    },
  },
});

export default videosSlice.reducer;

export const { add } = videosSlice.actions;
