
const initPerson = []

export default function personReducer(preState = initPerson, action) {
  console.log('personReducer', preState, action);
  const { type, data } = action
  switch (type) {
    case 'addPerson':
      return [data, ...preState]
    default:
      return preState;
  }
}