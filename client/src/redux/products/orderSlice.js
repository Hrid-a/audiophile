import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utlis/axios";

export const placeOrder = createAsyncThunk("orders/placeOrder",
    async (orderItems, { rejectWithValue }) => {

        try {
            const { data } = await api.post("/orders/place_order", orderItems);
            return data;
        } catch (error) {
            const errorMessage = error.response.data.message || "Something went wrong";
            return rejectWithValue(errorMessage);
        }
    })

const orderSlice = createSlice({
    name: "order",
    initialState: {
        status: "pending",
        error: "",
        order: {}
    },
    reducers: {
        resetState: (state) => {
            state.status = "pending";
            state.error = "";
        }
    },
    extraReducers: (builder) => {
        builder.addCase(placeOrder.pending, (state) => {
            state.status = "pending";
            state.error = "";
        }).addCase(placeOrder.fulfilled, (state, action) => {
            state.status = "success";
            state.error = "";
            state.order = action.payload;
        }).addCase(placeOrder.rejected, (state, action) => {
            state.status = "fail";
            state.error = action.payload;
            state.order = {}
        })
    }
})


export const { resetState } = orderSlice.actions;
export default orderSlice.reducer;