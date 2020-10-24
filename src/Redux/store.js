import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { books, book, users } from './reducers'


const reducers = combineReducers({
    books,
    book,
    users
})

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk)
))

export default store
