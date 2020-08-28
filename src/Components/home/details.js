import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { connect } from 'react-redux'

class Details extends React.Component {

  render() {
    const { book } = this.props;
    return (
      <Container>
          <Div>
              ID: 
              {book.id}
          </Div>
          <Div>
              Authors: 
              {book.author}   
          </Div>
          <Div>
              categories: 
              {book.name}   
          </Div>

           {/* <Image width={200} src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}></Image> */}
           {/* <Image width={300} src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}></Image> */}
          
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  book: state.book
})

export default connect(mapStateToProps, null)(Details)

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




// function Details() {
//     const id = location.pathname.replace('/','')
//     return (
//         <Container>
//             <Div>
//                 Authors: 
//                 {book.volumeInfo.authors}
//             </Div>
//             <Div>
//                 categories: 
//                 {book.volumeInfo.categories}   
//             </Div>
//             <Div>
//                 title: 
//                 {book.volumeInfo.title}   
//             </Div>

//              <Image width={200} src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}></Image>
//              <Image width={300} src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}></Image>
            
//         </Container>
//     )
//   }






// export default Details
