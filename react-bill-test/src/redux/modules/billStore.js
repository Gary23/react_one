import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const store = createSlice({
  name: "bill",
  initialState: {
    billList: [],
  },
  reducers: {
    setBillList(state, action) {
      state.billList = action.payload;
    },
    pushBillList(state, action) {
      state.billList.push(action.payload);
    }
  }
})

const { setBillList, pushBillList } = store.actions;

const fetchBillList = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:3006/ka");
    console.log('fetchBillList--res', res);
    dispatch(setBillList(res.data));
  }
}

const postBillList = (bill) => {
  return async (dispatch) => {
    const res = await axios.post("http://localhost:3006/ka", bill);
    console.log('postBillList--res', res);
    dispatch(pushBillList(res.data));
  }
}

export {
  fetchBillList,
  postBillList
}

export default store.reducer;