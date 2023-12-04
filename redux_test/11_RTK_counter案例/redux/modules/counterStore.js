import { createSlice } from '@reduxjs/toolkit'

const counterStore = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  reducers: {
    incement (state, action) {
      if (action.payload) {
        state.count += action.payload
        return
      }
      state.count++
    },
    decrement (state) {
      state.count--
    }
  }
})

const { incement, decrement } = counterStore.actions

// 导出actionCreater
export {
  incement,
  decrement
}
// 导出reducer
export default counterStore.reducer