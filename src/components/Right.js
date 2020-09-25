import React from 'react'
import './Right.css'
import save from "./assets/save.png"

const Right = ({addEntry, newContent, handleContent}) => {

   return (
     <div id="right" className="col-8 nopadding">
          <form onSubmit={addEntry}>
           <div id="textbox" className="textbox">
              <textarea 
	        id="textareastyle" 
	        spellcheck="false"
	        placeholder="Dear Diary," 
	        value={newContent} 
	        onChange={handleContent}></textarea>
           </div>
           <div id="bottombar" className="bottombar">
	     <input id="save" type="image" src={save} alt="Submit"/>
           </div>
          </form>
     </div>
   )
}

export default Right
