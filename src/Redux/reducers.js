import {
  GET_BOOKS,
  GET_BOOKS_DETAILS
} from './actions'

export function books(state = [], action) {
  switch (action.type) {
    case GET_BOOKS:
      return action.payload
    default:
      return state
  }
}

export function book(state = {}, action) {
  switch (action.type) {
    case GET_BOOKS_DETAILS:
      const { id, books } = action.payload
      return books.filter(book => book.id === id)[0]
    default:
      return state
  }
}