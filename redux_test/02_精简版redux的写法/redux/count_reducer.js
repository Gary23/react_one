const initCount = 0
const countReducer = (preState = initCount, action) => {
  console.log('countReducer', preState, action);
  const { type, data } = action
  switch (type) {
    case 'add':
      return preState + data * 1;
    case 'decrease':
      return preState - data * 1;
    default:
      return preState;
  }
}

export default countReducer