import React from 'react'
import './Card.css'

export const Card:React.FC<any>=({name})=> {
    return (
        <div className="card-container">
            <h1>{name}</h1>
        </div>
    )
}
