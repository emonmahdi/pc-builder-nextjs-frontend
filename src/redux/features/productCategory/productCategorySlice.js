import { createSlice } from "@reduxjs/toolkit";
const productCategorySlice = createSlice({
     name: 'products',
     initialState: {
          products: [],
          isLoading: true,
          error: null,
     },
     reducers: {
        getProductsCategorySuccess: (state, action) => {
               state.products = action.payload;
               state.isLoading = false;
               state.error = null;
          },
        
         
     }, 
});

export const {
     getProductsCategorySuccess,
} = productCategorySlice.actions;

export default productCategorySlice.reducer;






