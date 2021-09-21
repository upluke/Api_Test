import React from 'react'

export const Rating=()=> {
    const [display, setDispay]=React.useState(true)
    const [display2, setDispay2]=React.useState(true)
    const [display3, setDispay3]=React.useState(true)
    const [display4, setDispay4]=React.useState(true)
    const [display5, setDispay5]=React.useState(true)
    console.log(display,"*********")
    return (
        <div>
        
            <h1 className='letter'  onMouseEnter={()=>setDispay(!display)} style={{color:display?'blue':'red'}}>S</h1>
            <h1 className='letter'  onMouseEnter={()=>setDispay2(!display2)} style={{color:display2?'blue':'red'}}>S</h1>
            <h1 className='letter'  onMouseEnter={()=>setDispay3(!display3)} style={{color:display3?'blue':'red'}}>S</h1>
            <h1 className='letter'  onMouseEnter={()=>setDispay4(!display4)} style={{color:display4?'blue':'red'}}>S</h1>
            <h1 className='letter'  onMouseEnter={()=>setDispay5(!display5)} style={{color:display5?'blue':'red'}}>S</h1>
        </div>
    )
}
