import { createSlice } from "@reduxjs/toolkit";

const termSlice = createSlice({
  name: "term",
  initialState: "",
  reducers: {
    setTerm(state, action) {
      return action.payload;
    },
  },
});

export default termSlice.reducer;

export const { setTerm } = termSlice.actions;
