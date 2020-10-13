import React from "react"
import { createGlobalStyle } from 'styled-components'
import About from './Components/about'
import Home from './Components/home'
import Details from './Components/home/details'
// import Profile from './Components/user/profile'
import Editbook from './Components/edit/editBook'
import Upload from './Components/upload/upload'
import Login from './Components/login/index'
import Signup from './Components/signup/index'
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
              <Route path="/book/:id"><Details /></Route>
              {/* <Route path="/user/:id"><Profile /></Route> */}
              <Route path="/signup"><Signup /></Route>
              <Route path="/about"><About /></Route>
              <Route path="/upload"><Upload /></Route>
              <Route path="/login"><Login /></Route>
              <Route path="/editbook"><Editbook /></Route>
              <Route path="/"><Home /></Route>
            </Switch>
        </BrowserRouter>
    </>
)

export default Routes