import {createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import {counter} from './reducers'

const store = createStore(counter, composeWithDevTools(applyMiddleware(thunk)))//异步中间键

export default store