import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        isCartShown: false,
    },
    reducers: {
        addToCart: (state, action) => {
            const product = state.cart.find(item => item.id === action.payload.id);
            if (product) {
                product.Qty += 1;
            } else {
                state.cart.push(action.payload);
            }
        },
        removeFromCart: (state, action) => {
            state.cart = [...state.cart.filter(item => item.id !== action.payload)];
        },
        incrementQty: (state, action) => {
            state.cart = [...state.cart.map(item => item.id === action.payload ? { ...item, Qty: item.Qty + 1 } : item)]
        },
        decrementQty: (state, action) => {
            state.cart = [...state.cart.map(item => {
                if (item.Qty !== 1) return item.id === action.payload ? { ...item, Qty: item.Qty - 1 } : item;
                return null;
            }).filter(Boolean)]
        },
        removeAll: (state) => {
            state.cart.length = 0;
        },
        showCart: (state) => {
            state.isCartShown = !state.isCartShown;
        }
    }
})


export const { addToCart, removeFromCart, incrementQty, decrementQty, removeAll, showCart } = cartSlice.actions;
export default cartSlice.reducer;