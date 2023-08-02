import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const pcSlice = createSlice({
  name: "pc",
  initialState,
  reducers: {
    addToPcBuilder: (state, action) => {
      const existing = state.products.find(
        (product) => product._id === action.payload._id
      );

      if (!existing) {
        state.products.push(action.payload);
      }
    },
  },
});

export const { addToPcBuilder } = pcSlice.actions;

export default pcSlice.reducer;
