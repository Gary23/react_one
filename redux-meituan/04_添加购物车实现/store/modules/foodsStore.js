import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const foodStore = createSlice({
  name: 'foods',
  initialState: {
    foodList: [],
    activeIndex: 0,
    cartList: [],
    cartFlag: false
  },
  reducers: {
    setFoodList(state, action) {
      state.foodList = action.payload
    },
    setActiveIndex(state, action) {
      state.activeIndex = action.payload
    },
    setCartList(state, action) {
      state.cartFlag = true
      const item = state.cartList.find(item => item.id === action.payload.id)
      console.log(item);
      if (item) {
        item.count++
        return
      }
      state.cartList.push({...action.payload, count: 1})
    }
  }
})

const { setFoodList, setActiveIndex, setCartList } = foodStore.actions

const fetchFoodList = () => {
  return async (dispatch) => {
    const res = await axios.get('http://localhost:3004/takeaway')
    dispatch(setFoodList(res.data))
  }
}

export { fetchFoodList, setActiveIndex, setCartList }

export default foodStore.reducer