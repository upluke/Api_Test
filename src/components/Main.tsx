import React,{useState} from 'react'
import {Counter} from './Counter'
import { DisplayApi } from './DisplayApi'
 

export const Main=()=>{
 
    return(
        <div>
             {/* <Counter /> */}
             <DisplayApi />
        </div>
    )
}