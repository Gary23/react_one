import { configureStore } from "@reduxjs/toolkit";
import bill from './modules/billStore'

const store = configureStore({
  reducer: {
    bill,
  }
})

export default store