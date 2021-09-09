import React from 'react'
import { TodoListItem } from './TodoListItem'
import {Todo} from './types'

const todos:Array<Todo>=[
    {text:"walk the dog", complete:true},
    {text:"take out garbege", complete:true}
]

export const TodoAp:React.FC=() =>{
    return (
        <div>
            <TodoListItem todos={todos} />
        </div>
    )
}
