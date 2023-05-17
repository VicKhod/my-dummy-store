import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux";
import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";
import allProductsReducer from './slices/allProductsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    allProducts: allProductsReducer
  },
});

export default store;

export type TypeRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<TypeRootState> = useSelector;
