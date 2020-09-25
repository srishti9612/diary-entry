import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import './Login.css'
import loginService from '../services/entries.js'


const Login = ({ setLoggedIn }) => {
   
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')

    const history = useHistory()

    const handleLogin =  (event) => {
      event.preventDefault()
      
      const credObject = {
        username: username,
	password: password,
      }

      loginService
	.login(credObject)
        .then(returnedObject => {
		if (returnedObject) {
		   setLoggedIn(true)
		   loginService.setToken(returnedObject.token)
		   window.localStorage.setItem(
		      'loggedIn', 'true'
		   )
		   history.push('/home')
		} else {
		  console.log = function () {}
		}
	})
    }

    return (
      <div id="login" className="shadow p-3 mb-5 rounded">
	<form id="loginform" onSubmit={handleLogin}>
	 <div id="insideform">
	  <div className="form-group">
	      <input
	       placeholder="username"
	       id="username"
	       className="form-control"
	       type="text"
	       value={username}
	       name="Username"
	       onChange={({ target }) => setUsername(target.value)}
	      />
	  </div>
	  <div className="form-group">
	      <input
	       id="password"
	       placeholder="password"
	       className="form-control"
	       type="password"
	       value={password}
	       name="Password"
	       onChange={({ target }) => setPassword(target.value)}
	      />
	  </div>
	  <button id="lbutton" type="submit">Login</button>
	  <Link id="slink" to="/signup">Sign Up</Link>
	 </div>
	</form>
      </div>	
    )
}

export default Login
