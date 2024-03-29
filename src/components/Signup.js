import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import './Signup.css'
import signupService from '../services/entries.js'
import helper from './../utils/helper'

const Signup = () => {
  
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ cpassword, setCpassword ] = useState('')
    let passwordmatch = false
  
    const history = useHistory()

    const handleSubmit = (event) => {
       event.preventDefault()
       const userObject = {
         username: username,
	     password: password,
       }

       if(cpassword!==password){
          passwordmatch=false;
	      helper.showtoast("Passwords don't match!!")
       } else {
          passwordmatch=true;
       }


       if(passwordmatch){
        signupService
	      .signup(userObject)
	      .then(returnedUser => {
	          setUsername('')
	          setPassword('')
	          setCpassword('')

	          if(!returnedUser) {
	             helper.showtoast("A user with that username already exists. Please Try Again!!")
	          } else {
				 helper.showtoast("Signed Up Successfully!!")
	             history.push('/')
	          }
	      })
	      .catch(err => console.log = function() {} )
        }
    }

    return (
       <div id="signup" className="shadow p-3 mb-5 rounded">
	   <form id="signupform" onSubmit={handleSubmit}>
	    <div id="signupformdiv">
	      <div className="form-group">
	         <input
	            placeholder="username"
	            className="susername"
	            type="text"
	            value={username}
	            name="Username"
	            onChange={({ target }) => setUsername(target.value)}
	            required/>
	      </div>
	      <div className="form-group">
	         <input
	            id="pass1"
	            placeholder="password"
	            className="spassword"
	            type="password"
	            value={password}
	            name="pass1"
	            onChange={({ target }) => setPassword(target.value)}
	            required/>
	      </div>
	      <div className="form-group">
	         <input
	            id="pass2"
	            placeholder="confirm password"
	            className="cpassword"
	            type="password"
	            value={cpassword}
	            name="pass2"
	            onChange={({ target }) => setCpassword(target.value)}
	            required/>
	      </div>
	      <button id="sbutton" type="submit">Sign Up</button>
		  <Link id="loginlink" to="/">Log In</Link>
	    </div>
	   </form>
       </div>
    )
}

export default Signup
