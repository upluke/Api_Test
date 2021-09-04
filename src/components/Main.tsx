import React,{useState,useReducer} from 'react'


enum ActionType{
    INCREMENT_COUNTER="INCREMENT_COUNTER",
    DECREMENT_COUNTER="DECREMENT_COUNTER"
}
interface IReducer{
    type:ActionType;
    count:number    
}

interface ICounter{
    count:number
}
const reducer:React.Reducer<ICounter, IReducer>=(state, action)=>{
    return state
}


export const Main=()=>{
    const [state, dispatch] = useReducer<React.Reducer<ICounter,IReducer>>(reducer, {count:0})
    return(
        <div>
             
        </div>
    )
}