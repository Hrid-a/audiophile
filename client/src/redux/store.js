import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import categoryReducer from "./products/categorySlice";
import productReducer from "./products/productSlice";
import cartReducer from "./products/cartSlice";
import orderReducer from "./products/orderSlice";


const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist: ['category', 'cart'],
}

const rootReducer = combineReducers({
    category: categoryReducer,
    product: productReducer,
    cart: cartReducer,
    order: orderReducer
}
)


const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    devTools: false,
})
export const persistor = persistStore(store)
export default store;
