import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const foodStore = createSlice({
  name: 'foods',
  initialState: {
    foodList: [],
    activeIndex: 0,
    cartList: [],
    cartFlag: false,
    showCartVisible: false
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
    },
    clearCartList(state) {
      state.cartList = []
      state.cartFlag = false
      state.showCartVisible = false
    },
    setShowCartVisible(state, action) {
      state.showCartVisible = action.payload
    },
    addCount(state, action) {
      const item = state.cartList.find(item => item.id === action.payload)
      item.count++
    },
    reduceCount(state, action) {
      const item = state.cartList.find(item => item.id === action.payload)
      if (item.count > 1) {
        item.count--
        return
      } 
      if (item.count === 1) {
        const index = state.cartList.findIndex(item => item.id === action.payload)
        const cartList = state.cartList
        cartList.splice(index, 1)
        state.cartList = cartList
        if (state.cartList.length === 0) {
          state.cartFlag = false
          state.showCartVisible = false
        }
      }
    }
  }
})

const { setFoodList, setActiveIndex, setCartList, clearCartList, addCount, reduceCount, setShowCartVisible } = foodStore.actions

const fetchFoodList = () => {
  return async (dispatch) => {
    const res = await axios.get('http://localhost:3004/takeaway')
    dispatch(setFoodList(res.data))
  }
}

export { fetchFoodList, setActiveIndex, setCartList, clearCartList, addCount, reduceCount, setShowCartVisible }

export default foodStore.reducer