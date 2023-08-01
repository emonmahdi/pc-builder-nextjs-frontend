import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/product/productSlice";
import productsCategoryReducer from "./features/productCategory/productCategorySlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    productsCategory: productsCategoryReducer,
  },
});

export default store;
