import React, { useEffect, useState } from 'react'
import deleteService from '../services/entries.js'
import { ReactComponent as Prev } from './assets/prev.svg'
import { ReactComponent as Next } from './assets/next.svg'
import { ReactComponent as Delete } from './assets/delete.svg'
import './Read.css'
import './Common.css'
import entryService from '../services/entries.js'
import Loader from 'react-loader-spinner'
import helper from '../utils/helper.js'


const Read = () => {

    const [ entries, setEntries ] = useState([])
    const [ currentEntry, setCurrentEntry ] = useState(0)
    let Entry, Length, Content, Date

    useEffect(() => {

        entryService
             .getAll()
             .then(returnedObject => {
                 console.log(returnedObject)
                 let entriesArray = returnedObject.reverse()
                 setEntries(entriesArray)
                 console.log(currentEntry)
                 console.log(entries)
             })

        console.log(entries)

    }, [])



    if (entries.length!==0) {
            Length = entries.length
            
            Entry = entries[currentEntry]

            console.log(Entry)
            
            Content = (Entry) ? Entry.content : ""

            Date = (Entry) ? Entry.createdOn.weekday + ", " + Entry.createdOn.month + " " + Entry.createdOn.day + " " + Entry.createdOn.year + ", " + Entry.createdOn.time : ""
    
            console.log(Content)
            console.log(Date)
    } else {
            Date = ""
            Content = ""
    }        
    
 
    const handleDelete = () => {

        if(entries.length > 0) {
            let entries1 = [...entries]
            const deletedEntry = entries1[currentEntry]
            const entryId = deletedEntry._id 

            deleteService
                 .deleteEntry(entryId)
                 .then(returnedObject => {
                    console.log('delete successful')
                    helper.showtoast("Entry Deleted!!")
                 })

                 entries1.splice(currentEntry, 1)
                 setEntries(entries1)
                 

                if (currentEntry===entries1.length){
                    setCurrentEntry(currentEntry-1)
                } else {
                    console.log(entries)
                    setCurrentEntry(currentEntry)
                }
               
       }
 }

    const handlePrev = () => {
    
        if(currentEntry-1>=0) {
            setCurrentEntry(currentEntry-1)
        }
    }

    const handleNext = () => {
      
        if(currentEntry+1<Length) {
            setCurrentEntry(currentEntry+1)
        }
    }

    return (
            <div className="read">
               <div className="readingbox">
                { 
                 (Content !== "") ? (
                  <>
                  <div className="date-info">{Date}</div>
                  <div className="innerbox">
                   {Content}
                  </div>
                  </>) 
                    : 
                   (<div className="loader">
                    <Loader
                      type="Oval"
                      color="#737373"
	                  height={70}
	                  width={70}
	                  timeout={3000}/>
                    </div>) 
                 }
               </div>
               <div className="readactions">
                  <div className="prevaction" onClick={handlePrev}>
                     <div className="iconbackground">
                      <Prev/>
                     </div>
                  </div>
                  <div className="nextaction" onClick={handleNext}> 
                     <div className="iconbackground">
                      <Next/>
                     </div>
                  </div>
                  <div className="dividingline">
                  </div>
                  <div className="deleteaction">
                     <div className="iconbackground" onClick={handleDelete}>
                      <Delete/>
                     </div>
                  </div>
               </div>
            </div>
        ) 
}

export default Read