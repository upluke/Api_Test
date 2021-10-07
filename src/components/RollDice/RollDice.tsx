import React from 'react'
import {Die} from './Die'
import "./RollDice.css"



export const RollDice=()=>{
  const [die1, setDie1]=React.useState(1)
  const [die2, setDie2]=React.useState(1)
  const [isRolling, setIsRolling]=React.useState(false)
//   const sides=["one", "two", "three", "four", "five", "six"]


  const Roll=()=>{
    let newDie1=Math.floor(Math.random()*6)+1
    let newDie2=Math.floor(Math.random()*6)+1
    // setDie1(Math.floor(Math.random()*sides.length)) 
    // setDie2(Math.floor(Math.random()*sides.length)) 
    setDie1(newDie1)
    setDie2(newDie2)
    setIsRolling(true)
    
    setTimeout(()=>{
        setIsRolling(false)
    },2000)
  }

 
    return(
      <div className="RollDice">
        <div className="RollDice-container">
          <Die face={die1} isRolling={isRolling}/>
          <Die face={die2} isRolling={isRolling}/>
        </div>
        <button onClick={Roll} disabled={isRolling}>
        {isRolling?"Dumbo Roll":"Dumbo Wait"}
        </button>
      </div>
    )
  
}