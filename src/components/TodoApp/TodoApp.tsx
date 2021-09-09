import React from 'react'
import { TodoListItem } from './TodoListItem'


const initialTodos:Array<Todo>=[
    {text:"walk the dog", complete:true},
    {text:"take out garbege", complete:true}
]

export const TodoApp:React.FC=() =>{
    const [todos, setTodos] =React.useState(initialTodos)

    const toggleTodo:ToggleTodo=(selectedTodo)=>{
        const newTodos=todos.map(todo=>{
            if(todo===selectedTodo){
               return  {...todo, complete:!todo.complete}
            }
            return todo
        })
        setTodos(newTodos)
    }
    return (
        <React.Fragment>

            <TodoListItem todo={todos[0]} toggleTodo={toggleTodo} />
            <TodoListItem todo={todos[1]} toggleTodo={toggleTodo}/> 
        </React.Fragment>
    )
}
