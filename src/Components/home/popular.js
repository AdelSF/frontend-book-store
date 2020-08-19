import React from "react"
// import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Popular = () => {
    return (
        <>
            <Div>
                <h1>10 books here</h1>
            </Div>
        </>
    )
}

const Div = styled.div`
    background-color: lightgray;
    margin: 2% 10%;
    padding: 10%;
    display: flex;
    justify-content: center;
`
export default Popular