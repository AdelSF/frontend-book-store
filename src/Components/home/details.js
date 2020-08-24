import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

// remove the slash that comes before id
// find the book details using the id and books in localStorage

function Details(props) {
    const id = location.pathname.replace('/','')
    const books = JSON.parse(localStorage.getItem('books'))
    let book;
    for(var i = 0; i < 10; i++){
        if (id === books[i].id) {
            book = books[i]
            console.log(book);
        } 
    }
    return (
        <Container>
            <Div>
                Authors: 
                {book.volumeInfo.authors}
            </Div>
            <Div>
                categories: 
                {book.volumeInfo.categories}   
            </Div>
            <Div>
                title: 
                {book.volumeInfo.title}   
            </Div>

             <Image width={200} src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}></Image>
             <Image width={300} src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}></Image>
            
        </Container>
    )
  }

const Container = styled.section`
  padding: 4em;
`;

const Div = styled.div`
  padding: 1em;
  background: white;
  display: block;
`;
 
const Image  = styled.img`
  width: ${(props) => props.width}px;
  margin: 20px;
  padding: 20px;
  background: red;
  /* display: inline; */
`; 




export default Details
