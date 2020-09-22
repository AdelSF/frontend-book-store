import {
  GET_BOOKS,
  GET_BOOK,
  GET_BOOKS_DETAILS,
  EDIT_BOOK,
  ADD_USER
} from './actions'

export function books(state = [], action) {
  switch (action.type) {
    case GET_BOOKS:
      return action.payload
    default:
      return state
  }
}

// 7th here / updating the store
export function book(state = {}, action) {
  switch (action.type) {
    case GET_BOOKS_DETAILS:
      const { id, books } = action.payload
      return books.filter(book => book.id === id)[0]
    case GET_BOOK:
      return action.payload
    case EDIT_BOOK:
      return action.payload
    default:
      return state
  }
}

export function users(state = [], action) {
  switch (action.type) {
    case ADD_USER:
      return action.payload
    default:
      return state
  }
}