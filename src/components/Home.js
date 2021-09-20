import React, { useState, useEffect } from 'react'
import './Home1.css'
import Left from './Left'
import Sidebar from './Sidebar'
import Conditional from './Conditional'
import entryService from '../services/entries.js'

const Home = ({setLoggedIn}) => {

  const [ newContent, setContent ] = useState('')

  const [ entries, setEntries ] = useState([])

  const [ toggle, setToggle ] = useState(true)
	
  const [ selected, setSelected ] = useState('write')

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
     setSelected('read')
  }

  const handleWrite = () => {
     setToggle(true)
     setSelected('write')
  }

  const handleInsights = () => {
     setSelected('insights')
  }

  const handleViewAll = () => {
     setSelected('viewall')
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
       id="home">
	  <Sidebar />
	  {/*<Left
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
	    />*/}
    </div>
  )
}

export default Home
