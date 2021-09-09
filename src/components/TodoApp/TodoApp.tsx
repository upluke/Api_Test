import React from 'react'
import { AddTodoForm } from './AddTodoForm'
import { TodoList } from './TodoList'


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

    const addTodo:AddTodo=newTodo=>{
        newTodo.trim()!==""&& setTodos([...todos, {text:newTodo, complete:false}])
         
    }

    return (
        <React.Fragment>
            <TodoList todos={todos} toggleTodo={toggleTodo} />
            <AddTodoForm addTodo={addTodo} />
        </React.Fragment>
    )
}
