import { createSlice } from "@reduxjs/toolkit";

const addToBuildSlice = createSlice({
  name: "addToBuild",
  initialState: {
    addToBuild: [],
    isLoading: true,
    error: null,
  },
  reducers: {
    addToBuild: (state, action) => {
      const existProduct = state.addToBuild.find(
        (product) => product.category === action.payload.category
      );

      if (existProduct) {
      } else {
        state.addToBuild.push({ ...action.payload });
      }
    },
  },
});


export const { addToBuild } = addToBuildSlice.actions;
export default addToBuildSlice.reducer;
