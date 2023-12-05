import { configureStore } from '@reduxjs/toolkit'
import countReducer from './modules/counterStore'
import channelReducer from './modules/channelStore'

console.log('countReducer------------------', countReducer);

const store = configureStore({
  reducer: {
    counter: countReducer,
    channels: channelReducer

  }
})

export default store