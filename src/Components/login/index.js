import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import styled from 'styled-components'


class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            email: "",
            password: ""
        }
    }




    render() {
        return (
            <>
                <H1>Login Section</H1>
                <Form>
                    <Label htmlFor='email'> Email:
                        <Input type="text" name='email' />
                    </Label>
                    <Label htmlFor='password'> Password:
                        <Input type="text" name='password' />
                    </Label>
                    <Button type='submit'>Login</Button>
                    <Button2><Link to='/signup' style={{textDecoration: 'none'}}>Sign up</Link></Button2>
                    
                </Form>

            </>
        )
    }
}


export default Login

const H1 = styled.h1`
    border: 1px solid black;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: lightyellow;
`


const Form = styled.form`
    margin: 2rem 12rem;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: lightyellow;
`;

  const Label  = styled.label`
  /* margin: 20px; */
  margin-top: 15px;
  /* margin-left: 30%; */
  padding: 5px;
  display: block;
  /* display: block; */
`; 



const Input = styled.input`
    width: 300px;
    height: 35px;
    border: 1px solid #ccc;
    background-color: #fff;
    display: block;
  `;

  const Button = styled.button`
    margin: 3rem;
    width: 300px;
    height: 35px;
    background-color: #5995ef;
    color: #fff;
    border-radius: 3px;
  `;

  const Button2 = styled.button`
    margin: 0 3rem 2rem;
    width: 300px;
    height: 35px;
    background-color: cyan;
    color: #fff;
    border-radius: 3px;
  `;
