import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/product/productSlice";
import productsCategoryReducer from "./features/productCategory/productCategorySlice";
import addToBuildReducer from "./features/addToBuild/addToBuildSlice";
import userReducer from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
    productsCategory: productsCategoryReducer,
    addToBuild: addToBuildReducer,
  },
});

export default store;
