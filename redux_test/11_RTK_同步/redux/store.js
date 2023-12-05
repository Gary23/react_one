import { configureStore } from '@reduxjs/toolkit'
import countReducer from './modules/counterStore'

console.log('countReducer------------------', countReducer);

const store = configureStore({
  reducer: {
    counter: countReducer
  }
})

export default store