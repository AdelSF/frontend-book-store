import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';


const imgStyle = {
  backgroundColor: 'red',
}

const liStyle = {
  listStyleType: 'none',
  display: 'inline',
}

class Books extends React.Component {
  constructor(props) {
    super(props)
    this.state = {items: []}
  }
  

  componentDidMount() {
    fetch("https://www.googleapis.com/books/v1/volumes?q=" + "javascript" + "&key=" + "AIzaSyCkHETEzRqprKXBlK6PLoaEOHcNJJWOT8U" + "&maxResults=10")
    .then(res => res.json())
    .then((res) => {
        this.setState({ items: res.items })
    })
  }
  
    render() {
      const { items } = this.state;
      console.log(items)
      return (
        <>
          <form>
            <label>
              10 Javascript Books Name: 
            </label>
          </form>
          <ul className="image">
            {items.map(item => (
              <li style={liStyle} key={item.id}>
                <a>
                  <img style={imgStyle} src={item.volumeInfo.imageLinks.thumbnail} alt={items.title} />
                </a>
              </li>
            ))}
          </ul>
        </>
    )
  }
}

export default Books




// same component with React hooks and axios

// function Books() {

//     const [result, setResult] = useState([])
//     const apiKey = "AIzaSyCkHETEzRqprKXBlK6PLoaEOHcNJJWOT8U"


//     function loadBook() {
//         axios.get("https://www.googleapis.com/books/v1/volumes?q=" + "javascript" + "&key=" + apiKey + "&maxResults=10")
//         .then(data => {
//             console.log(data.data.items)
//             setResult(data.data.items)
//         })
//     }

//     useEffect(() => {
//       loadBook()
//     }, [])

//     return (
//       <div>
//         <form>
//           <label>
//             10 Javascript Books Name: 
//           </label>
//         </form>

//         {result.map(book => (
//             <a href={book.volumeInfo.previewLink} key={book.id}>
//                  <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} />
//             </a>
//         ))}
//       </div>
//     )
// }

// export default Books