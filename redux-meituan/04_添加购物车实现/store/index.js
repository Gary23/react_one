import { configureStore } from "@reduxjs/toolkit";
import foodsReducer from "./modules/foodsStore";

const store = configureStore({
  reducer: {
    foods: foodsReducer,
  }
})

export default store
