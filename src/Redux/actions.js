import axios from 'axios';

export const POST_BOOKS = 'POST_BOOK'
export const GET_BOOKS = 'GET_BOOKS'
export const GET_BOOK = 'GET_BOOK'
export const GET_BOOKS_DETAILS = 'GET_BOOKS_DETAILS'

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

export const getBookById = id => dispatch => (
    axios.get(`http://localhost:3000/${id}`)
    .then(res => {
        dispatch(getBook(res.data))
        return res.data
    })
)