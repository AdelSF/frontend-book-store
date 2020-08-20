import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'


function Books() {

    const [result, setResult] = useState([])
    const apiKey = "AIzaSyCkHETEzRqprKXBlK6PLoaEOHcNJJWOT8U"


    function loadBook() {
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + "javascript" + "&key=" + apiKey + "&maxResults=10")
        .then(data => {
            console.log(data.data.items)
            setResult(data.data.items)
        })
    }

    useEffect(() => {
      loadBook()
    }, [])

    return (
      <div>
        <form>
          <label>
            10 Book Name: 
          </label>
        </form>

        {result.map(book => (
            <a href={book.volumeInfo.previewLink} key={book.id}>
                 <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} />
            </a>
        ))}
      </div>
    )
}

export default Books