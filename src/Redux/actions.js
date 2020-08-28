export const GET_BOOKS = 'GET_BOOKS'
export const GET_BOOKS_DETAILS = 'GET_BOOKS_DETAILS'


export const getBookDetails = (id, books) => ({
    type: GET_BOOKS_DETAILS,
    payload: {id, books}
})

export const getBooks = (books) => ({
    type: GET_BOOKS,
    payload: books
})

export const getBooksRequest = dispatch => {
    // fetch("https://www.googleapis.com/books/v1/volumes?q=" + "javascript" + "&key=" + "AIzaSyCkHETEzRqprKXBlK6PLoaEOHcNJJWOT8U" + "&maxResults=10")
    fetch("http://localhost:3000/books")
    .then(res => res.json())
    .then(res => {
        dispatch(getBooks(res))
    })
}

