import React, { useState, useEffect } from 'react'
import './Home1.css'
import Left from './Left'
import Conditional from './Conditional'
import entryService from '../services/entries.js'

const Home = ({setLoggedIn}) => {

  const [ newContent, setContent ] = useState('')

  const [ entries, setEntries ] = useState([])

  const [ toggle, setToggle ] = useState(true)

  const [ currentEntry, setCurrentEntry ] = useState(0)

  const handleContent = (event) => {
     setContent(event.target.value)
  }

  const addEntry = (event) => {
      event.preventDefault()
     
      if(currentEntry<0){
        setCurrentEntry(0)
      }

      
      let dateFormat = require('dateformat')
      let now = new Date()
      let newdate = dateFormat(now)
      
      let newId = entries.length+1

      const entryObject = {
        id: newId ,
	content: newContent,
	date: newdate,
      }
   
      entryService
	.newentry(entryObject)
	.then(returnedObject => {
	   setEntries(entries.concat(returnedObject))
	})
      
      setContent('')
  }

  const handleRead = () => {
     setToggle(false)
    
  }

  const handleWrite = () => {
     setToggle(true)
  }
	

  useEffect(() => {
   
    entryService
      .getAll()
      .then(returnedObject => {
         setEntries(returnedObject)
      })

  }, [])



  return (
    <div 
       id="home" 
       className="container shadow bg-white rounded">
      <div className="row">
       <Left
	 handleRead={handleRead}
	 handleWrite={handleWrite}
	 toggle={toggle}
	 entries={entries}
	 setCurrentEntry={setCurrentEntry}
	 setLoggedIn={setLoggedIn}
	 />
        
        <Conditional 
	    toggle={toggle}
	    addEntry={addEntry}
	    newContent={newContent}
	    handleContent={handleContent}
	    entries={entries}
	    currentEntry={currentEntry}
	    setCurrentEntry={setCurrentEntry}
	    setEntries={setEntries}
	    />
       </div>
    </div>
  )
}

export default Home
