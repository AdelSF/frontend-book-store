import React from "react"
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => (
    <Container>
        <ul>
            <Image src="../assets/logo.png" alt="logo"/>
            <Li><Link to='/about' style={{textDecoration: 'none'}}>about</Link></Li>
            <Li><Link to='/upload' style={{textDecoration: 'none'}} >upload</Link></Li>
            <Li><Link to='/' style={{textDecoration: 'none'}}>home</Link></Li>
        </ul>
    </Container>
)

const Container = styled.header`
    /* background-color: lightblue; */
`

const Li = styled.li`
    width: 100px;
    height: 20px;
    float: right;
    list-style-type: none;
    font-size: 1.1rem;
    text-transform: uppercase;
    font-weight: 800;
    margin: 1% 2%;
`

const Image = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: 3px solid black;

`


export default Header