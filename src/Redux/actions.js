import axios from 'axios';
import { verify } from '../Util/Auth'

export const POST_BOOKS = 'POST_BOOK'
export const GET_BOOKS = 'GET_BOOKS'
export const GET_BOOK = 'GET_BOOK'
export const GET_BOOKS_DETAILS = 'GET_BOOKS_DETAILS'
export const EDIT_BOOK  = 'EDIT_BOOK'
export const ADD_USER  = 'ADD_USER'

export const getBookDetails = (id, books) => ({
    type: GET_BOOKS_DETAILS,
    payload: {id, books}
})


export const postBook = (book) => ({
    type: POST_BOOK,
    payload: book
})

export const getBooks = (books) => ({
    type: GET_BOOKS,
    payload: books
})

export const getBook = (book) => ({
    type: GET_BOOK,
    payload: book
})

export const editBook = (book) => ({
    type: EDIT_BOOK,
    payload: book
})

export const addUser = (users) => ({
    type: ADD_USER,
    payload: users
})

export const getBooksRequest = dispatch => {
    // fetch("https://www.googleapis.com/books/v1/volumes?q=" + "javascript" + "&key=" + "AIzaSyCkHETEzRqprKXBlK6PLoaEOHcNJJWOT8U" + "&maxResults=10")
    fetch("http://localhost:3000/books")
    .then(res => res.json())
    .then(res => {
        dispatch(getBooks(res))
    })
}

export const postBookRequest = book => dispatch => (
    axios.post("http://localhost:3000/book", book)
    .then(res => {
        console.log('res.data => ', res.data);
        dispatch(getBook(res.data))
        return res.data
    })
)

// 2nd here
export const editBookRequest = book => dispatch => (
    axios.put("http://localhost:3000/editbook", book) //request raft =>
    // stopped
    // 6th here => result miad to response
    .then(res => {
        dispatch(editBook(res.data)) // => mire too reducer to update redux 7th
        return res.data  // => bad az update kardan redux, in be onvane book dar propmise editBook
    })
)

// changed here =========
export const getBookById = id => dispatch => (
    axios.get(`http://localhost:3000/book/${id}`)
    .then(res => {
        dispatch(getBook(res.data))
        return res.data
    })
)



export const postUserRequest = user => dispatch => (
    axios.post("http://localhost:3000/signup", user)
    .then(res => {
        return res
    })
    .catch(error => {
        return error.response
    })
)

export const loginRequest = user => dispatch => (
    axios.post("http://localhost:3000/signin", user)
    .then(res => {
        let token = res.data.token
        let user = verify(token)
        dispatch(addUser(user))
        return res
    })
    .catch(error => {
        return error.response
    })
)