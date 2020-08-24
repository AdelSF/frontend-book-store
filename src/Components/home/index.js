import React from "react"
// import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Books from './books'
import Details from './details'

const Home = () => {
    return (
        <>
            <div>
                <h1>Welcome to the Bookstore</h1>
                {/* <Search /> */}
                <Books />
                {/* <Details /> */}
            </div>
        </>
    )
}

export default Home