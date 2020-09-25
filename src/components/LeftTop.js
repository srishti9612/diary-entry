import React from 'react'
import { useHistory } from 'react-router-dom'
import './LeftTop.css'
import logoutIcon from "./assets/logoutIcon.png"
import quill from "./assets/quill.png"
import book from "./assets/book.png"

const LeftTop = ({ setLoggedIn, handleWrite, handleRead }) => {

const history = useHistory()

const handleLogout = () => {
  window.localStorage.setItem(
    'token', 'null'
  )
  window.localStorage.setItem(
    'loggedIn', 'false'
  )
 
  setLoggedIn(false)
  history.push('/')
  window.localStorage.clear()
}

return (
   <div id="leftTop">
	 <img id="logouticon" src={logoutIcon} onClick={handleLogout}></img>
	 <img id="bookicon" align="right" src={book} onClick={handleRead}></img>
	 <img id="quillicon" align="right" src={quill} onClick={handleWrite}>
	 </img>
   </div>
  )
}

export default LeftTop
