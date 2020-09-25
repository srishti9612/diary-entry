import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Signup.css'
import signupService from '../services/entries.js'

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

       if(cpassword!=password){
          passwordmatch=false;
	  alert("Passwords don't match!!")
       } else {
          passwordmatch=true;
       }


       if(passwordmatch){
        signupService
	  .signup(userObject)
	  .then(returnedUser => 
	     {
	       setUsername('')
	       setPassword('')
	       setCpassword('')
	       if(!returnedUser) {
	         alert("A user with that username already exists!!")
	       } else {
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
	        className="form-control"
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
	        className="form-control"
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
	        className="form-control"
	        type="password"
	        value={cpassword}
	        name="pass2"
	        onChange={({ target }) => setCpassword(target.value)}
	        required/>
	    </div>
	    <button id="sbutton" type="submit">Sign Up</button>
	  </div>
	 </form>
       </div>
    )
}

export default Signup
