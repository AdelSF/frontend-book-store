import React from "react"
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => (
    <Container>
        <Image src="../assets/logo.png" alt="logo"/>
        <Button color={ 'orange' }><Link to='/about' >about</Link></Button>
        <Button color={ 'lightpurple' }><Link to='/' >home</Link></Button>
    </Container>
)

const Container = styled.header`
    padding: 5px;
    background-color: lightblue;
`

const Button = styled.button`
    width: 100px;
    height: 20px;
    background-color: ${({color}) => color};
    float: right;
`

const Image = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 50%;
`

export default Header