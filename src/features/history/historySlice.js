import { createSlice } from "@reduxjs/toolkit";

const historySlice = createSlice({
  name: "history",
  initialState: [],
  reducers: {
    push(state, action) {
      if (!state.find((video) => video.id === action.payload.id))
        state.push(action.payload);
    },
    reset() {
      return [];
    },
  },
});

export default historySlice.reducer;

export const { push, reset } = historySlice.actions;
