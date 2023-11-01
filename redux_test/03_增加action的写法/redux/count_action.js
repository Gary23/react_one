import { ADD, DECREASE } from './constant.js'

export const addAction = value => ({ type: ADD, data: value })
export const decreaseAction = value => ({ type: DECREASE, data: value })