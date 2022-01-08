import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/navSlice.js"
import userReducer from "./slices/userSlice.js";

export const store = configureStore({
    reducer:{
        nav: navReducer,
        user: userReducer,
    },
});