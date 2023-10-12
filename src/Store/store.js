import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Reducer/ProductsSLice";
import CartReducer from "./Reducer/CartSlice";

export const store = configureStore({
    reducer: {
        Products: productReducer,
        Carts: CartReducer,
    },
});
