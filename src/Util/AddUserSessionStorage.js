import React from 'react'
import jwt_decode from "jwt-decode"
import { useDispatch } from 'react-redux'
import { addUser } from '../Redux/actions'
import { isValid } from './Auth'

export default function AddUserSessionStorage() {
    const dispatch = useDispatch()
    if (isValid()) {
        let token = window.sessionStorage.getItem('token')
        let user = jwt_decode(token)
        dispatch(addUser(user))
    }
}