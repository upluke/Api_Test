import React,{useState} from 'react'
import {Counter} from './DisplayApi/Counter'
import { DisplayApi } from './DisplayApi/DisplayApi'
import {TodoApp} from './TodoApp/TodoApp'
 

export const Main=()=>{
 
    return(
        <div>
             {/* <Counter /> */}
             {/* <DisplayApi /> */}
             <TodoApp />
        </div>
    )
}