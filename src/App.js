import React, { useState, useEffect } from 'react'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"


const App = () => {
 
  const loggedInJSON = window.localStorage.getItem("loggedIn")
  const loggedInVal = Boolean(JSON.parse(loggedInJSON))
  const [ loggedIn, setLoggedIn ] = useState( 
    () => Boolean(loggedInVal || false) 
  )
  

  useEffect(() => {
    window.localStorage.setItem("loggedIn", loggedIn)
  }, [loggedIn])

  return (
    <Router>
      <Switch>

	<Route exact path="/home">
	 {loggedIn ? <Home setLoggedIn={setLoggedIn} /> : <Redirect to="/" />}
        </Route>

        <Route exact path="/signup">
	  <Signup />
        </Route>

        <Route exact path="/">
          <Login setLoggedIn={setLoggedIn} />
        </Route>

      </Switch>
    </Router>
  )
}

export default App
