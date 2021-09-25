import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import './Login.css'
import loginService from '../services/entries.js'
import { ReactComponent as BoyPicture } from './assets/write.svg'
import helper from './../utils/helper'


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
		        helper.showtoast("Invalid Credentials")
		    }
	    })
    }

    return (
      <div id="login">
	    <div className="heading">My Journal</div>
	    <div className="contents">
  	    <form id="loginform" onSubmit={handleLogin}>
	      <div id="insideform">
	        <div>
	          <input
	             placeholder="username"
	             id="username"
	             className="username"
	             type="text"
	             value={username}
	             name="Username"
	             onChange={({ target }) => setUsername(target.value)}/>
	        </div>
	        <div>
	          <input
	             id="password"
	             placeholder="password"
	             className="password"
	             type="password"
	             value={password}
	             name="Password"
	             onChange={({ target }) => setPassword(target.value)}/>
	        </div>
	        <button id="lbutton" type="submit">Log In</button>
	        <Link id="slink" to="/signup">Sign Up</Link>
	      </div>
	    </form>
	    <BoyPicture className="boypicture" />
	    </div>
      </div>	
    )
}

export default Login
