import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        isCartShown: false,
    },
    reducers: {
        addToCart: (state, action) => {
            const product = state.products.find(item => item.id === action.payload.id);
            if (product) {
                product.Qty += 1;
            } else {
                state.products.push(action.payload);
            }
        },
        removeFromCart: (state, action) => {
            state.products = [...state.products.filter(item => item.id !== action.payload)];
        },
        incrementQty: (state, action) => {
            state.products = [...state.products.map(item => item.id === action.payload ? { ...item, Qty: item.Qty + 1 } : item)]
        },
        decrementQty: (state, action) => {
            state.products = [...state.products.map(item => {
                if (item.Qty > 1) return item.id === action.payload ? { ...item, Qty: item.Qty - 1 } : item;
                return null;
            }).filter(Boolean)]
        },
        removeAll: (state) => {
            state.products.length = 0;
        },
        showCart: (state) => {
            state.isCartShown = !state.isCartShown;
        }
    }
})


export const { addToCart, removeFromCart, incrementQty, decrementQty, removeAll, showCart } = cartSlice.actions;
export default cartSlice.reducer;