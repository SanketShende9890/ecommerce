import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSingleProductDetails } from "./productDetailAPI";


const initialState = {
    details: {},
    status: 'idle',
    error: null
}


export const getSingleProductDetailsAsync = createAsyncThunk(
    'productDetails/getSingleProductDetails',
    async (id)=>{
        const response = await getSingleProductDetails(id);
        return response.data
    }
)

const productDetailSlice = createSlice({
    name: 'productDetails',
    initialState,
    reducers:{

    },
    extraReducers: (builder)=>{
        builder
            .addCase(getSingleProductDetailsAsync.pending, (state)=>{
                state.status = 'loading'
            })
            .addCase(getSingleProductDetailsAsync.fulfilled, (state, action)=>{
                state.status = 'idle';
                state.details = action.payload
            })
            .addCase(getSingleProductDetailsAsync.rejected, (state, action)=>{
                state.status = 'idle';
                state.error = action.error
            })
    }
})


export const selectAllDetails = (state) => state.productDetails.details
export const selectDetailsStatus = (state) => state.productDetails.status

export default productDetailSlice.reducer