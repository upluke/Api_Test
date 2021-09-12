import React,{useState} from 'react'
import {Counter} from './DisplayApi/Counter'
import { DisplayApi } from './DisplayApi/DisplayApi'
import {TodoApp} from './TodoApp/TodoApp'
import { MonstersRolodex } from './MonstersRolodex/MonstersRolodex' 

export const Main=()=>{
 
    return(
        <div>
             {/* <Counter /> */}
             {/* <DisplayApi /> */}
             {/* <TodoApp /> */}
             <MonstersRolodex />
        </div>
    )
}