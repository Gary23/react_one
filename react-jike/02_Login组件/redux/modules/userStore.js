import { createSlice } from "@reduxjs/toolkit";
import { request, storage } from '@/utils/index'

const store = createSlice({
  name: 'user',
  initialState: {
    token: storage.get('token') || ''
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload
      storage.set('token', action.payload)
    }
  }
})

const { setToken } = store.actions

const fetchLogin = (params) => {
  return async (dispatch) => {
    try {
      const res = await request.post('/authorizations', params)
      console.log('fetchLogin--------------', res);
      dispatch(setToken(res.data.data.token))
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export {
  fetchLogin
}

export default store.reducer