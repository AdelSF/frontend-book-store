import React from "react"
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Developer from './developer'

const About = () => (
    <>
        <Div>
             <h1>Team Members</h1>
        </Div>        
        <Developer />
    </>
)

const Div = styled.div`
    margin: 1% 20%;
    padding: 1%;
    display: flex;
    justify-content: center;
`

export default About