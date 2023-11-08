import { ADD_PERSON } from "../constant";
const initPerson = []

export default function personReducer(preState = initPerson, action) {
  console.log('personReducer', preState, action);
  const { type, data } = action
  switch (type) {
    case ADD_PERSON:
      return [data, ...preState]
    default:
      return preState;
  }
}