import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./src/features/products";

const store = configureStore({
    reducer:{
        products:ProductSlice
    }
})

export default store