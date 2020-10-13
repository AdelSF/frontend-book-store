import React from "react"
import { Link } from 'react-router-dom'
import styled from 'styled-components'



const Developer = () => (
    <>
        <Div>
            <h1>More info</h1>
                <p>Adel Pakrad - web developement project of book store
            </p>
            <img src="../assets/logo.png" alt="image"/>
        </Div>        
    </>
)

const Div = styled.div`
    background-color: orange;
    margin: 1% 20%;
    padding: 1%;
    display: flex;
    justify-content: center;
`

export default Developer