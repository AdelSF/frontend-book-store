import React from "react"
// import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Books from './books'
import Details from './details'
import Upload from '../upload/upload'
import { Link } from 'react-router-dom'



const Home = () => {
    return (
        <>
            <div>
                <H1>Welcome to Bookstore</H1>
                {/* <Search /> */}
                <Books />
                {/* <button color={ 'yellow' }><Link to='/upload' >upload a book</Link></button>                 */}
                {/* <Upload /> */}
                {/* <Details /> */}
            </div>
        </>
    )
}

const H1 = styled.h1`
    border: 1px solid black;
    padding: 10px;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: lightyellow;
`


export default Home