import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import goin from './reducers/goin'
import post from './reducers/post'
import otherPost from './reducers/otherPost'
import post2 from './reducers/post2'
import otherPost2 from './reducers/otherPost2'
const rootState = combineReducers({ goin, post, otherPost, post2, otherPost2 })
const store = createStore(rootState, applyMiddleware(thunk))
export default store
