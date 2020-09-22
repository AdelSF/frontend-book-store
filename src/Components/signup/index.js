import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import { postUserRequest } from './../../Redux/actions'



class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            fname: "",
            lname: "",
            email: "",
            password: ""
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }


    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        // this.setState({ user })

      }

    
    onSubmit(e) {
        e.preventDefault();
        this.props.postUserRequest(this.state)
        .then(user => {
            this.props.history.push(`/${user.id}`);
        })
    }
      



    render() {
        const { fname, lname, email, password} = this.state;
        return (
            <>
                <H1>Sign Up Section</H1>
                <Form onSubmit={this.onSubmit} autocomplete="on">
                    <Label htmlFor='fname'> First Name:
                        <Input 
                            type="text" 
                            name='fname'  
                            value={fname}
                            onChange={this.onChange}
                         />
                    </Label>
                    <Label htmlFor='lname'> Last Name:
                        <Input 
                            type="text" 
                            name='lname'
                            value={lname}
                            onChange={this.onChange} 
                        />
                    </Label>
                    <Label htmlFor='email'> Email:
                        <Input 
                            type="email" 
                            name='email'
                            value={email}
                            onChange={this.onChange}
                         />
                    </Label>
                    <Label htmlFor='password'> Password:
                        <Input 
                            type="password" 
                            name='password'
                            value={password}
                            onChange={this.onChange}
                         />
                    </Label>
                    <Button type='submit'>Sign Up</Button>
                </Form>

            </>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    postUserRequest: (user) => dispatch(postUserRequest(user))
  })

export default connect(null, mapDispatchToProps)(withRouter(Signup))


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
