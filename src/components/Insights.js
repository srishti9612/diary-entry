import React, { useState, useEffect } from 'react'
import './Insights.css'
import insightService from './../services/entries'
import currentWeekNumber from 'current-week-number'
import Loader from 'react-loader-spinner'

const Insights = () => {

    const [ thisWeek, setThisWeek ] = useState('')
    const [ thisMonth, setThisMonth ] = useState('')
    const [ thisYear, setThisYear ] = useState('')
    const [ currentStreak, setCurrentStreak ] = useState('')
    const [ longestStreak, setLongestStreak ] = useState('')

    useEffect(() => {

       let dateFormat = require('dateformat')
       let now = new Date()
       let newdate = dateFormat(now)
       let dateContents = newdate.split(' ')
       console.log(dateContents)
       let currentMonth = dateContents[1]
       let currentYear = dateContents[3] 


       const insightParams = {
           week: currentWeekNumber(),
           month: currentMonth,
           year: currentYear
       }

       insightService
            .getInsights(insightParams)
            .then(returnedObj => {
                console.log(returnedObj)
                setThisWeek(returnedObj.thisWeek)
                setThisMonth(returnedObj.thisMonth)
                setThisYear(returnedObj.thisYear)
                setCurrentStreak(returnedObj.currentStreak)
                setLongestStreak(returnedObj.longestStreak)
            })

    }, [])


    return (
        <div className="insights">
           <div className="insights-info">
              <div className="insight"> 
               <div className="insight-heading">
                   Number Of Entries
               </div>
               <div className="insight-details">
                 <div className="entries-insight">
                     <div className="entries-insight-heading">
                         This Week
                     </div>
                     <div className="entries-insight-no">
                         { (thisWeek!=='') ? ( 
                             <>{thisWeek}</>
                           ):(
                             <div className="loader">
                                  <Loader
                                     type="Oval"
                                     color="#737373"
	                                   height={40}
	                                   width={40}
	                                   timeout={3000}/>
                             </div>
                           )
                         } 
                     </div>
                 </div>
                 <div className="entries-insight">
                     <div className="entries-insight-heading">
                        This Month
                     </div>
                     <div className="entries-insight-no">
                        { (thisMonth!=='') ? ( 
                             <>{thisMonth}</>
                           ):(
                             <div className="loader">
                                  <Loader
                                     type="Oval"
                                     color="#737373"
	                                   height={40}
	                                   width={40}
	                                   timeout={3000}/>
                             </div>
                           )
                         } 
                     </div>
                 </div>
                 <div className="entries-insight">
                     <div className="entries-insight-heading">
                         This Year
                     </div>
                     <div className="entries-insight-no">
                     { (thisYear!=='') ? ( 
                             <>{thisYear}</>
                           ):(
                             <div className="loader">
                                  <Loader
                                     type="Oval"
                                     color="#737373"
	                                   height={40}
	                                   width={40}
	                                   timeout={3000}/>
                             </div>
                           )
                         } 
                     </div>
                 </div>
               </div>
              </div>
              <div className="insight">
                <div className="insight-heading">
                    Streak    
                </div>
                <div className="insight-details">
                  <div className="entries-insight">
                      <div className="entries-insight-heading">
                          Longest Streak
                      </div>
                      <div className="entries-insight-no">
                         { (longestStreak!=='') ? ( 
                             <>{longestStreak}</>
                           ):(
                             <div className="loader">
                                  <Loader
                                     type="Oval"
                                     color="#737373"
	                                   height={40}
	                                   width={40}
	                                   timeout={3000}/>
                             </div>
                           )
                         } 
                      </div>
                  </div>
                  <div className="entries-insight">
                      <div className="entries-insight-heading">
                          Current Streak
                      </div>
                      <div className="entries-insight-no">
                         { (currentStreak!=='') ? ( 
                             <>{currentStreak}</>
                           ):(
                             <div className="loader">
                                  <Loader
                                     type="Oval"
                                     color="#737373"
	                                   height={40}
	                                   width={40}
	                                   timeout={3000}/>
                             </div>
                           )
                         } 
                      </div>
                  </div>
                </div>  
              </div>
           </div>
        </div>
    )

}

export default Insights