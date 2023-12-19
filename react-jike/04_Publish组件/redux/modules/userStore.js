import { createSlice } from "@reduxjs/toolkit";
import { storage } from '@/utils/index'
import { fetchUserInfoApi, fetchLoginApi } from '@/apis/user'

const store = createSlice({
  name: 'user',
  initialState: {
    token: storage.get('token') || '',
    userInfo: {},
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload
      storage.set('token', action.payload)
    },
    setUserInfo(state, action) {
      state.userInfo = action.payload
    }
  }
})

const { setToken, setUserInfo } = store.actions

const fetchLogin = (params) => {
  return async (dispatch) => {
    try {
      const res = await fetchLoginApi(params)
      dispatch(setToken(res.data.data.token))
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
const fetchUserInfo = () => {
  return async (dispatch) => {
    try {
      const res = await fetchUserInfoApi()
      dispatch(setUserInfo(res.data.data))
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export {
  fetchLogin,
  fetchUserInfo,
  setToken,
  setUserInfo
}

export default store.reducer