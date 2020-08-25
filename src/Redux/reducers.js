import { GET_BOOKS } from './actions'

export function books(state = [], action) {
    switch (action.type) {
      case GET_BOOKS:
        return action.payload
      default:
        return state
    }
  }
