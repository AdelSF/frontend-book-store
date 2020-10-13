import React, { useState } from 'react';
import axios from 'axios'
import styled from 'styled-components'


function Search() {

    const [book, setBook] = useState("")
    const [result, setResult] = useState([])
    const [apiKey, setApiKey] = useState("AIzaSyCkHETEzRqprKXBlK6PLoaEOHcNJJWOT8U")

    
    function handleChange() {

        const book = event.target.value
        setBook(book)
    } 

    function handleSubmit(event) {
        event.preventDefault()
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + apiKey + "&maxResults=20")
        .then(data => {
            // console.log(data.data.items)
            setResult(data.data.items)
        })
    }

    return (
      <div>
        <form onSubmit={ handleSubmit }>
          <label>
            Book Name: 
            <input type="text" onChange={ handleChange } placeholder="Search here" />
          </label>
          <button type="submit">Search</button>
        </form>

        {result.map(book => (
            <a href={book.volumeInfo.previewLink}>
                 <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} />
            </a>
        ))}
      </div>
    )
}

export default Search