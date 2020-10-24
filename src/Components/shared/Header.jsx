import React from "react"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
    const fname = useSelector(state => state.users?.user?.fname)
    return (
        <Container>
            <Profile>
                <Image src="../assets/logo.png" alt="logo"/>
                <User>{fname}</User>
            </Profile>
            <Items>
                <Item><Link to='/signup' style={{textDecoration: 'none'}}>sign up</Link></Item>
                <Item><Link to='/login' style={{textDecoration: 'none'}}>login</Link></Item>
                <Item><Link to='/about' style={{textDecoration: 'none'}}>about</Link></Item>
                <Item><Link to='/upload' style={{textDecoration: 'none'}} >upload</Link></Item>
                <Item><Link to='/' style={{textDecoration: 'none'}}>home</Link></Item>
            </Items>
        </Container>
    )
}

const Profile = styled.div`
    display: flex;
    flex-direction: row;
`
const User = styled.p`
    margin-left: 25px;
`

const Container = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 40px;
    align-items: center;
`

const Items = styled.ul`
    display: flex;
    flex-direction: row-reverse;
`
const Item = styled.li`
    list-style-type: none;
    font-size: 1.1rem;
    text-transform: uppercase;
    font-weight: 800;
    margin-left: 25px;
    :last-child {
        margin-left: 0;
    }
`

const Image = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: 3px solid black;

`


export default Header