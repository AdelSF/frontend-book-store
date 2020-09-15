import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getBooksRequest, getBookDetails } from './../../Redux/actions'


class Books extends React.Component {

  componentDidMount() {
    this.props.getBooksRequest()
  }

  handleClick(id) {
    this.props.getBookDetails(id, this.props.books)
  }
  
  render() {
    const { books } = this.props;
    return (
      <Images>
        {books.map(book => (
          <Image key={book.id}>
            <Link to={`${book.id}`} onClick={ () => this.handleClick(book.id) }>
              <Img src={book.img} alt={book.name} />
              <p>{book.name}</p>
            </Link>
          </Image>
        ))}
      </Images>
    )
  }
}

const Images = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
`

const Image = styled.li`
  margin: 1rem;
`

const Img = styled.img`
  width: 200px;
  height: 300px;
`

const mapDispatchToProps = dispatch => ({
    getBooksRequest: () => dispatch(getBooksRequest),
    getBookDetails: (id, books) => dispatch(getBookDetails(id, books))
})
const mapStateToProps = state => ({
  books: state.books
})

export default connect(mapStateToProps, mapDispatchToProps)(Books)





// same component with React hooks and axios

// function Books() {

//     const [result, setResult] = useState([])
//     const apiKey = ""AIzaSyCkHETEzRqprKXBlK6PLoaEOHcNJJWOT8U


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