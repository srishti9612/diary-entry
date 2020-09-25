import React, { useEffect } from 'react'
import deleteService from '../services/entries.js'
import './Read.css'
import prev from "./assets/prev.png"
import next from "./assets/next.png"
import del from "./assets/delete.png"

const Read = ({entries, currentEntry, setCurrentEntry, setEntries}) => {

useEffect(() => {
  if(entries.length != 0){
    setCurrentEntry(entries.length-1)
  }
}, [])

if(entries.length != 0){
let Length = entries.length

let Entry = entries[currentEntry]

let Content = (Entry) 
	? Entry.content : "NO CONTENT"

return (
    <div 
	id="read" 
	className="col-8 nopadding">
     <div id="insideread">
      <div id="content"><p> {Content} </p> </div>
      <div id="bottombar">
       {<>
	 <img
	   id="prev"
	   align="left"
	   src={prev}
	   onClick={()=>{
	     if(currentEntry+1<Length)
               setCurrentEntry(currentEntry+1)
	   }}>
	 </img>
	 <img
	   id="next"
	   align="left"
	   src={next}
	   onClick={()=>{
	      if(currentEntry-1>=0)
               setCurrentEntry(currentEntry-1)
	     }
            }>
         </img>
         <img
	   id="delete"
	   align="right"
	   src={del}
	   onClick={()=>{
	   if(currentEntry>=0){
	   let entries1 = [...entries]
	   const deletedEntry = entries1[currentEntry]
           const entryId = deletedEntry._id 

	   deleteService
	      .deleteEntry(entryId)
	      .then(returnedObject => {
	         console.log = function () {}
	      })

	   entries1.splice(currentEntry, 1)
	   setEntries(entries1)

            if(currentEntry==entries1.length){
	      setCurrentEntry(currentEntry-1)
	    }else{
	     setCurrentEntry(currentEntry)
	    }
	   }
	  
	  }}>
	 </img>
	</>
       }
      </div>
     </div>
    </div>
 ) 
}

else {

return (
    <div id="noContent">
      <p>No Content</p>
    </div>
 )
}

}

export default Read
