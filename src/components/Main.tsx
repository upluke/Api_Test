import React,{useState} from 'react'
import {Counter} from './DisplayApi/Counter'
import { DisplayApi } from './DisplayApi/DisplayApi'
 

export const Main=()=>{
 
    return(
        <div>
             {/* <Counter /> */}
             <DisplayApi />
        </div>
    )
}