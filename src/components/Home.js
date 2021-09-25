import React, { useState } from 'react'
import './Home.css'
import { useHistory } from 'react-router-dom'
import Sidebar from './Sidebar'
import Selected from './Selected'

const Home = ({setLoggedIn}) => {

   const [ selected, setSelected ] = useState('')


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

   const handleRead = () => {
       setSelected('read')
       console.log(selected)
   }

   const handleWrite = () => {
       setSelected('write')
       console.log(selected)
   }

   const handleInsights = () => {
       setSelected('insights')
       console.log(selected)
   }

  return (
    <div id="home">
	   <Sidebar 
        handleLogout={handleLogout}
        handleWrite={handleWrite}
        handleRead={handleRead}
        handleInsights={handleInsights}
      />
     <Selected selected={selected}/>
    </div>
  )
}

export default Home
