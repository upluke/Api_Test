import React from 'react'
import converter from 'number-to-words'
import "./Die.css"


export const Die:React.FC<any>=({face, isRolling})=>{
  
    let numWord=converter.toWords(face)
    return(
      <i className={`Die fas fa-dice-${numWord} ${isRolling&&"shaking"}`}></i>
    )
 
}

