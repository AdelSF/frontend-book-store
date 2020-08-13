import React from "react"
import { createGlobalStyle } from 'styled-components'
import Books from './Components/books'
import About from './Components/about'
import Login from './Components/log-in'
import Signup from "./Components/sign-up"
import Home from './Components/home'
import Header from './Components/shared/Header.jsx'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

const Routes = () => (
    <>
        <GlobalStyle />
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/books"><Books /></Route>
                <Route path="/about"><About /></Route>
                <Route path="/login"><Login /></Route>
                <Route path="/signup"><Signup /></Route>
                <Route path="/"><Home /></Route>
            </Switch>
        </BrowserRouter>
    </>
)

export default Routes