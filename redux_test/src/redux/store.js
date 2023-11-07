import { createStore, applyMiddleware, combineReducers } from 'redux'
import countReducer from './reducers/count.js'
import personReducer from './reducers/person.js'
import thunk from 'redux-thunk'

const allReducers = combineReducers({
  count: countReducer,
  personList: personReducer
})

export default createStore(allReducers, applyMiddleware(thunk))