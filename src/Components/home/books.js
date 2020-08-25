import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getBooksRequest } from './../../Redux/actions'


class Books extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getBooksRequest()
  }
  
    render() {
      const { books } = this.props;
      return (
        <>
          <form>
            <label>
              10 Javascript Books Name: 
            </label>
          </form>
          <ul className="image">
            {books.map(book => (
              <li key={book.id}>
                <Link to={book.id}>
                  <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} />
                </Link>
              </li>
            ))}
          </ul>
        </>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getBooksRequest: () => dispatch(getBooksRequest)
}}
const mapStateToProps = state => ({
  books: state.books
})

export default connect(mapStateToProps, mapDispatchToProps)(Books)














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