import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const pcSlice = createSlice({
  name: "pc",
  initialState,
  reducers: {
    addToPcBuilder: (state, action) => {
      state.products.push(action.payload);
    },
  },
});

export const { addToPcBuilder } = pcSlice.actions;

export default pcSlice.reducer;
