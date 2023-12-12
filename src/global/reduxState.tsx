import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
};

const reduxState = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    onToggleState: (state, { payload }) => {
      state.toggle = payload;
    },
  },
});

export const { onToggleState } = reduxState.actions;

export default reduxState.reducer;
