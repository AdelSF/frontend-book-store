import React from "react"
import { createGlobalStyle } from 'styled-components'
import About from './Components/about'
import Home from './Components/home'
import Details from './Components/home/details'
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
              <Route path="/about"><About /></Route>
              <Route path="/:id"><Details /></Route>
              <Route path="/"><Home /></Route>
            </Switch>
        </BrowserRouter>
    </>
)

export default Routes