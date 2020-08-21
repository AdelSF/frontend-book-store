import React from "react"
// import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Books from './books'

const Home = () => {
    return (
        <>
            <div>
                <h1>Welcome to the Bookstore</h1>
                {/* <Search /> */}
                <Books />
            </div>
        </>
    )
}

export default Home