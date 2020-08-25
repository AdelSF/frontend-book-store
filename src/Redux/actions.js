export const GET_BOOKS = 'GET_BOOKS'

export const getBooks = (books) => ({
    type: GET_BOOKS,
    payload: books
})

export const getBooksRequest = dispatch => {
    fetch("https://www.googleapis.com/books/v1/volumes?q=" + "javascript" + "&key=" + "AIzaSyCkHETEzRqprKXBlK6PLoaEOHcNJJWOT8U" + "&maxResults=10")
    .then(res => res.json())
    .then(res => {
        dispatch(getBooks(res.items))
    })
}
