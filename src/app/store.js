import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/product-list/productListSlice';
import productCategoryReducer from '../features/product-list/productCategorySlice';
import productDetailReducer from '../features/productDetails/productDetailSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
    productCategory: productCategoryReducer,
    productDetails: productDetailReducer
  },
});
