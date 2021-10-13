import React from 'react'
import {Box} from './Box'
import "./ColorBox.css"

const defaultProps={
    numBoxes:18,
    allColors:["#e91d63","#999999","#f8e71c","#607d8b","#0090ac"]
}

export const ColorBox =()=>{
    
    const boxes=Array.from({length:defaultProps.numBoxes}).map(()=>(
        <Box colors={defaultProps.allColors} />
    ))
    return(
        <div className='ColorBox'>{boxes}</div>
    )
}