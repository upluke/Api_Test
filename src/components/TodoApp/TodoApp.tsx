import React from 'react'
import { TodoListItem } from './TodoListItem'


const todos:Array<Todo>=[
    {text:"walk the dog", complete:true},
    {text:"take out garbege", complete:true}
]

export const TodoApp:React.FC=() =>{
    return (
        <div>
            <TodoListItem todo={todos[0]} />
            Ok
        </div>
    )
}
