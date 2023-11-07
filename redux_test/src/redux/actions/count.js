import { ADD, DECREASE } from '../constant.js'

export const addAction = value => ({ type: ADD, data: value })
export const addAsyncAction = (value) => {
  return async dispatch => {
    setTimeout(() => {
      dispatch({ type: ADD, data: value })
    }, 1000);
  }
}
export const decreaseAction = value => ({ type: DECREASE, data: value })