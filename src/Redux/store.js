import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { books, book } from './reducers'

const reducers = combineReducers({
    books,
    book
})

const store = createStore(
    reducers, /* preloadedState, */
    applyMiddleware(thunk, logger)
  );
export default store
