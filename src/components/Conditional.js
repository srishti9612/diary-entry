import React from 'react'
import Right from './Right'
import Read from './Read'

const Conditional = 
({ toggle, addEntry, newContent, handleContent, entries, currentEntry, setCurrentEntry, setEntries}) => {
     if(toggle){
       return (
         <Right 
            addEntry={addEntry}
            newContent={newContent}
            handleContent={handleContent}
            /> 
        )
  }
  
  return (
    <Read 
      entries={entries}
      currentEntry={currentEntry}
      setCurrentEntry={setCurrentEntry}
      setEntries={setEntries}
      />
  )
}

export default Conditional

