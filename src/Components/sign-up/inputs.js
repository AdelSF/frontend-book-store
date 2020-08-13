import React from "react"
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Inputs = () => (
    <>
        <Div>
            <form>
                <label>First Name:<input type="text" name="firstname" /></label>
                <label>Last Name:<input type="text" name="lastname" /></label>
                <label>Last Name:<input type="text" name="lastname" /></label>
                <label>Email:<input type="text" name="password" /></label>
                <input type="submit" value="Submit" />
            </form> 
        </Div>        
    </>
)

const Div = styled.div`
    background-color: pink;
    margin: 1% 20%;
    padding: 1%;
    display: flex;
    justify-content: center;
`

export default Inputs