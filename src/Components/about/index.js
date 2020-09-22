import React from "react"
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Developer from './developer'



const About = () => (
    <>
        <H1>Team Members</H1>
        <Developer />
    </>
)


export default About


const H1 = styled.h1`
    border: 1px solid black;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: lightyellow;
`
