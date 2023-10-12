import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "CartSlice",
    initialState: [],

    reducers: {
        add_Product: (state, action) => {
        state.push(action.payload);
        },
    },
});
export default CartSlice.reducer;
export const { add_Product } = CartSlice.actions;
