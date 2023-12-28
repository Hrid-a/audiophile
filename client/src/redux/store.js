import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./products/categorySlice";
import productReducer from "./products/productSlice";
import cartReducer from "./products/cartSlice";
import orderReducer from "./products/orderSlice";

const store = configureStore({
    reducer: {
        'category': categoryReducer,
        'product': productReducer,
        'cart': cartReducer,
        'order': orderReducer
    }
})


export default store;