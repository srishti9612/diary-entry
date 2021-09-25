import React from 'react'
import Write from './Write'
import Read from './Read'
import Insights from './Insights'

const Selected = ({ selected }) => {

    console.log(selected)
       
    if (selected === 'write') {
        return (
             <Write/>
        )
    }

    if (selected === 'read') {
        return (
             <Read/>
        )
    }

    if (selected === 'insights') {
        return (
            <Insights/>
        )
    }

    return (
         <Write/>
    )
}

export default Selected
