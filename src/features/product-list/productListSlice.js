import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllProducts, fetchProductByCategory, fetchProductsBySort } from "./productListAPI";

const initialState = {
  products: [],
  status: "idle",
  error: null
};

export const fetchAllProductsAsync = createAsyncThunk(
  "product/fetchAllProducts",
  async () => {
    const response = await fetchAllProducts();
    return response.data;
  }
);

export const fetchAllProductsByCategoryAsync = createAsyncThunk(
  "product/fetchProductByCategory",
  async (filter) => {
    const response = await fetchProductByCategory(filter);
    return response.data;
  }
);

export const fetchAllProductsBySortAsync = createAsyncThunk(
  "product/fetchProductsBySort",
  async ({sort, order}) => {
    const response = await fetchProductsBySort(sort, order);
    return response.data;
  }
);



// Main SLICE function

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    productByBrand: (state, action) => {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })
      .addCase(fetchAllProductsAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error;
      })
      .addCase(fetchAllProductsByCategoryAsync.pending, (state)=>{
        state.status = 'loading';
      })
      .addCase(fetchAllProductsByCategoryAsync.fulfilled, (state, action)=>{
        state.status = 'idle';
        state.products = action.payload
      })
      .addCase(fetchAllProductsByCategoryAsync.rejected, (state, action)=>{
        state.status = 'idle';
        state.error = action.error
      })
      .addCase(fetchAllProductsBySortAsync.pending, (state)=>{
        state.status = 'loading';
      })
      .addCase(fetchAllProductsBySortAsync.fulfilled, (state, action)=>{
        state.status = 'idle';
        state.products = action.payload
      })
      .addCase(fetchAllProductsBySortAsync.rejected, (state, action)=>{
        state.status = 'idle';
        state.error = action.error
      })
  },
});

export const { productByBrand } = productSlice.actions;

export const selectAllProducts = (state) => state.product.products;
export const selectProductsStatus = (state) => state.product.status;

export default productSlice.reducer;
