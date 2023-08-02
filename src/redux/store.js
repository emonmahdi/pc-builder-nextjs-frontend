import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/product/productSlice";
import productsCategoryReducer from "./features/productCategory/productCategorySlice";
import addToBuildReducer from "./features/addToBuild/addToBuildSlice";
import userReducer from "./features/user/userSlice";
import cartReducer from "./features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
    productsCategory: productsCategoryReducer,
    addToBuild: addToBuildReducer,
    cart: cartReducer,
  },
});

export default store;
