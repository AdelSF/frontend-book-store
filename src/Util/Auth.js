import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import jwt_decode from "jwt-decode"

export default class Auth extends React.Component {

    render() {
        const { path, children } = this.props
        return (
            isValid() ?
                <Route path={path}>{children}</Route>
            :
                <Redirect to="/login" />
        )
    }

}

export function isValid() {
    let now = new Date()
    let exp = new Date(getExp() * 1000)
    return exp > now
}


function getExp() {
    let token = window.sessionStorage.getItem('token')
    if (token) {
        let exp = jwt_decode(token)
        return exp.exp
    } else {
        return 0
    }
}

export function verify(token) {
    window.sessionStorage.setItem('token', token)
    let decoded = jwt_decode(token)
    return decoded
}