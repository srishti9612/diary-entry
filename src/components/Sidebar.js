import React, { useState } from 'react'
import './Sidebar.css'
import { ReactComponent as Logout } from './assets/logout.svg'
import { ReactComponent as Pen } from './assets/pen.svg'
import { ReactComponent as Read } from './assets/read.svg'
import { ReactComponent as Insights } from './assets/insights.svg'


const Sidebar = ({ handleLogout, handleWrite, handleRead, 
   handleInsights}) => {

   const [ active, setActive ] = useState({
        logout: false,
        write: true,
        read: false,
        insights: false
   })

   const handleSelected = (activeVal) => { 
      let activeObj = {...active}
      console.log(activeObj)
      Object.keys(activeObj).forEach(value => activeObj[value] = false)
      activeObj[activeVal] = true
      setActive(activeObj)
      console.log(active)
      
      switch(activeVal) {
         case 'logout': 
           handleLogout()
           break
         case 'write':
            handleWrite()
            break
         case 'read':
            handleRead()
            break
         case 'insights':
            handleInsights()
            break
         default:
            console.log('Value not recognised')
      }

   }


   return (
    <div className="sidebar">
       <div className={active.logout ? "navlink active" : "navlink"} onClick={() => handleSelected('logout')}>
          <Logout className="navicon"/>
          <div className="navtext">Logout</div>
       </div>
       <div className={active.write ? "navlink active" : "navlink"} onClick={() => handleSelected('write')}>
          <Pen className="navicon"/>
          <div className="navtext">Write</div>
       </div>
       <div className={active.read ? "navlink active" : "navlink"} onClick={() => handleSelected('read')}>
          <Read className="navicon"/>
          <div className="navtext">Read</div>
       </div>
       <div className={active.insights ? "navlink active" : "navlink"} onClick={() => handleSelected('insights')}>
          <Insights className="navicon"/>
          <div className="navtext">Insights</div>
       </div>
    </div>
   )
}

export default Sidebar
