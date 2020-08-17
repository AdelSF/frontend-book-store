import React from "react"
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => (
    <Container>
        <Button color={ 'lightpurple' }><Link to='/' >home</Link></Button>
        <Button color={ 'lightgreen' }><Link to='/books' >books</Link></Button>
        <Button color={ 'orange' }><Link to='/about' >about</Link></Button>
        <Button color={ 'yellow' }><Link to='/login' >login</Link></Button>
        <Button color={ 'pink' }><Link to='/signup' >signup</Link></Button>
    </Container>
)

const Container = styled.header`
    padding: 20px;
    background-color: lightblue;
`

const Button = styled.button`
    width: 100px;
    height: 20px;
    background-color: ${({color}) => color};
`

export default Header