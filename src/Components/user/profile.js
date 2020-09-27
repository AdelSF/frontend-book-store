import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { connect } from 'react-redux'
import { getBookById } from '../../Redux/actions'

class Profile extends React.Component {

  componentDidMount() {
    // if (Object.keys(this.props.book).length === 0) {
    //   const id = location.pathname.replace('/', '')
    //   this.props.getBookById(id)
    // }
  }

  render() {
    console.log(this.props.book)
    const { name, author, year, country, img, series, contributors, edition, grade, keywords } = this.props.book;
    return (
      <Container>
        {/* <ContainerDetails>
          <Div>
              Title: 
              {name}   
          </Div>
          <Div>
              Authors: 
              {author}   
          </Div>
          <Div>
              Year of Publish: 
              {year}   
          </Div>
          <Div>
              Country: 
              {country}   
          </Div>
          <Div>
              Series: 
              {series}   
          </Div>
          <Div>
              Contributors : 
              {contributors}   
          </Div>
          <Div>
              Edition: 
              {edition}   
          </Div>
          <Div>
              Grade : 
              {grade}   
          </Div>
          <Div>
              Keywords: 
              {keywords}   
          </Div>
          <Button><Link to='/editbook'>Edit Book</Link></Button>
          <Button>Order Book</Button>
        </ContainerDetails>
        <Div>
          <Image src={img}></Image>
        </Div> */}
      </Container>
    )
  }
}

// const mapStateToProps = state => ({
//   book: state.book
// })

// const mapDispatchToProps = dispatch => ({
//   getBookById: (id) => dispatch(getBookById(id))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Details)

// connect() function connects a react component to a redux store
// mapStateToProps is a function that you would use to provide the store data to your component,
// mapDispatchToProps is something that you will use to provide the action creators as props to your component.

export default Profile;

const Container = styled.section`
  display: flex;
  padding: 4em;
  border: 10px solid gray;
`;
const ContainerDetails = styled.div`
  font-size: 1.5rem;
  border: 4px solid lightgray;
`;

const Div = styled.div`
  padding: .8rem;
`;
 
const Image  = styled.img`
  width: 400px;
  margin-left: 10rem;
  /* padding: 20px; */
`; 

const Button = styled.button`
  margin: 3rem;
  width: 250px;
  height: 35px;
  background-color: #5995ef;
  color: #fff;
  border-radius: 3px;
`;



//=======================================================




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
