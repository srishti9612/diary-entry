import React, { useState } from 'react'
import { ReactComponent as Clear } from './assets/clear.svg'
import { ReactComponent as Save } from './assets/save.svg'
import './Write.css'
import './Common.css'
import helper from './../utils/helper'
import entryService from '../services/entries.js'
const currentWeekNumber = require('current-week-number');



const Write = () => {

   const [ newContent, setContent ] = useState('')

   const handleContent = (event) => {
      setContent(event.target.value)
   } 

   const clearContent = (event) => {
       setContent('')
   }

   const addEntry = (event) => {
       event.preventDefault()

       console.log("inside add entry")
    
       let dateFormat = require('dateformat')
       //let now = new Date('2021-09-28T14:00:00.000Z')
       let now = new Date()
       let newdate = dateFormat(now)

       console.log(newdate)

       
       let weekNumber = currentWeekNumber()
       console.log(weekNumber)
       console.log(newdate)
       console.log(newdate.split(' '))
       

       const entryObject = {
            content: newContent,
            date: newdate,
            week: weekNumber
       }
 
       entryService
           .newentry(entryObject)
           .then(returnedObject => {
                 console.log('Successfully added entry')
                 helper.showtoast('Entry Saved!!')
           })
    
       setContent('')
 }

   return (
     <div className="write">
          <form className="writeform">
            <div className="writingbox">
               <textarea 
	                className="textareastyle" 
	                spellCheck="false"
	                placeholder="Dear Diary," 
	                value={newContent} 
	                onChange={handleContent}></textarea>
            </div>
            <div className="writeactions">
                <div className="clearaction">
                   <div className="iconbackground">
                     <Clear className="clearsvg" onClick={clearContent}/>
                   </div>
                </div>
                <div className="dividingline"></div>
                <div className="saveaction">
                   <div className="iconbackground">
                     <Save className="savesvg" onClick={addEntry}/>
                   </div>
                </div>
            </div>
          </form>
     </div>
   )
}

export default Write