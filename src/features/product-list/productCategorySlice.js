import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProductsCategoryList } from "./productListAPI";

const initialState = {
  category: [],
  status: "idle",
  error: null,
};

export const getAllProductCategory = createAsyncThunk(
  "productCategory/fetchProductsCategoryList",
  async () => {
    const response = await fetchProductsCategoryList();
    return response.data;
  }
);

const productCategorySlice = createSlice({
  name: "productCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProductCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllProductCategory.fulfilled, (state, action) => {
        state.status = "idle";
        state.category = action.payload;
      })
      .addCase(getAllProductCategory.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error;
      });
  },
});

export const selectAllCategory = (state) => state.productCategory.category;

export default productCategorySlice.reducer;
