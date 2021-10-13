import React from 'react'
import {choice} from './helpers'
import "./Box.css"

interface BoxProp{
    colors: string[]
}

export const Box:React.FC<BoxProp> =({colors})=>{
    const [color, setColor] =React.useState(choice(colors))

    const pickColor =()=>{
        let newColor
        do{
            newColor=choice(colors)
        }while(newColor===color)

        setColor(newColor)
    }
    
    const handleClick=()=>{
        pickColor()
    }

    return(
        <div 
          className='Box'
          style={{backgroundColor:color}}
          onClick={handleClick}
        />

       
    )
}