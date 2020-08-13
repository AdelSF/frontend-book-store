import React from "react"
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Inputs from './inputs'


const Login = () => (
    <>
        <Div>
             <h1>Login</h1>
        </Div>  
        <Inputs />      

    </>
)

const Div = styled.div`
    margin: 1% 20%;
    padding: 1%;
    display: flex;
    justify-content: center;
`

export default Login