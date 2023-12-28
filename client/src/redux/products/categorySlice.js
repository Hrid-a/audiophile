import { createSlice } from "@reduxjs/toolkit";


const categorySlice = createSlice({
    name: 'category',
    initialState: { categories: [] },
    reducers: {
        addCategories: (state, action) => {
            state.categories = [...action.payload];
        }
    }
})

export const { addCategories } = categorySlice.actions;
export default categorySlice.reducer;