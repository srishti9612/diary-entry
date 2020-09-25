import React from 'react'
import LeftTop from './LeftTop'
import './Left.css' 

const Left = 
({handleRead, handleWrite, toggle, entries, setCurrentEntry, setLoggedIn}) => {

function renderDateList(dates){
  let size = dates.length - 1
  return (
  <div id="list">
   <ul className="list-group list-group-flush">
     {
       dates.map((date, i) => 
	<li key={size-i} onClick={()=>setCurrentEntry(size-i)}>
	   <a href="#" className="list-group-item list-group-item-action">
	        {dates[size-i]}
	   </a>
	</li>)	   
     }
   </ul>
  </div>
  )
}

function renderElement(toggle){

    let dates=[]

    entries.forEach((entry) => {
	  dates.push(''+ entry.date)
    })
    
   
    if(!toggle){
       return (
	<div>
          {renderDateList(dates)}
	</div>
       )
    }
 }

   return (
    <div id="left" className="col-4 nopadding">
      <div id="insideleft">
       <LeftTop 
	   setLoggedIn={setLoggedIn}
	   handleWrite={handleWrite}
	   handleRead={handleRead}/>
       {renderElement(toggle)}
      </div>
   </div>
  )
}

export default Left


