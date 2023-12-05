import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const foodStore = createSlice({
  name: 'foods',
  initialState: {
    foodList: [],
  },
  reducers: {
    setFoodList(state, action) {
      state.foodList = action.payload
    }
  }
})

const { setFoodList } = foodStore.actions

const fetchFoodList = () => {
  return async (dispatch) => {
    const res = await axios.get('http://localhost:3004/takeaway')
    dispatch(setFoodList(res.data))
  }
}

export { fetchFoodList }

export default foodStore.reducer