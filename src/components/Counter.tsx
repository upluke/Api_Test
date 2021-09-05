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
    switch(action.type){
        case ActionType.INCREMENT_COUNTER:
            return {count: state.count+ action.count}
        case ActionType.DECREMENT_COUNTER:
            return {count: state.count- action.count}
        default:
            return state
    }
    
}

const countValue:number=1

export const Counter=()=>{
    const [state, dispatch] = useReducer<React.Reducer<ICounter,IReducer>>(reducer, {count:0})
    return(
    <div>
        <p>{state.count}</p>
        <button onClick={()=>dispatch({type:ActionType.INCREMENT_COUNTER,count:countValue})}>Add</button>
        <button onClick={()=>dispatch({type:ActionType.DECREMENT_COUNTER,count:countValue})}>Minus</button> 
    </div>
    )
}