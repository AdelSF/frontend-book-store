import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { books, book, users } from './reducers'

const reducers = combineReducers({
    books,
    book,
    users
})

const store = createStore(
    reducers, /* preloadedState, */
    applyMiddleware(thunk, logger)
  );
export default store
