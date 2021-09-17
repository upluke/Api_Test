import React from 'react'
import './SearchBox.css'

export const SearchBox:React.FC<any>=({placeholder, handleChange})=> {
    return (
        <div>
             <input className='search' type="search" placeholder={placeholder} 
                onChange={handleChange} /> 
        </div>
    )
}

 