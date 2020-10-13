import React, {useState} from "react"
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
                <Books />
            </div>
        </>
    )
}

const H1 = styled.h1`
    border: 1px solid black;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: lightyellow;
`


export default Home