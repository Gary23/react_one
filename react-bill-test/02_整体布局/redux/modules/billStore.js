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
    }
  }
})

const { setBillList } = store.actions;

const fetchBillList = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:3006/ka");
    console.log('res', res);
    dispatch(setBillList(res.data));
  }
}

export {
  fetchBillList
}

export default store.reducer;