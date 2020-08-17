import React from "react"
// import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Popular from './popular'
import Search from './search'

const Home = () => {
    return (
        <>
            <Div>
                <h1>Welcome to the Bookstore</h1>
            </Div>
            <Div>
                <Search />
            </Div>
            {/* <Popular />   */}
        </>
    )
}

const Div = styled.div`
    background-color: lightgray;
    margin: 2% 20%;
    padding: 1%;
    display: flex;
    justify-content: center;
`
export default Home