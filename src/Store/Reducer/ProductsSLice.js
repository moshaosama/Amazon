import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProduct =createAsyncThunk('productSlice/fetchProduct' , async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data= await res.json();
    return data;
})
const productSlice =createSlice({
    name:'productSlice',
    initialState:[],
    reducers:{},

    extraReducers:(Builder) => {
        Builder.addCase(fetchProduct.fulfilled ,(state ,action) => {
            return action.payload;
        })
    }
})

export default productSlice.reducer;