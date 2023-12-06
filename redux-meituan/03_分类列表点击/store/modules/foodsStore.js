import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const foodStore = createSlice({
  name: 'foods',
  initialState: {
    foodList: [],
    activeIndex: 0,
  },
  reducers: {
    setFoodList(state, action) {
      state.foodList = action.payload
    },
    setActiveIndex(state, action) {
      state.activeIndex = action.payload
    }
  }
})

const { setFoodList, setActiveIndex } = foodStore.actions

const fetchFoodList = () => {
  return async (dispatch) => {
    const res = await axios.get('http://localhost:3004/takeaway')
    dispatch(setFoodList(res.data))
  }
}

export { fetchFoodList, setActiveIndex }

export default foodStore.reducer