import React,{useState,useEffect} from 'react'
import { CardList } from './CardList'

export const MonstersRolodex:React.FC=()=>{
    const [users, setUsers]=useState([])
    const [searchField, setSearchField]=useState("")
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(data=>setUsers(data))
    },[])
    


    return(
        <div>
            <input type="search" placeholder="search monsters" 
            onChange={e=>{setSearchField(e.target.value)}} />
            <CardList users={users} />  
            
       
           
        </div>
        
    )
} 


    // Note:
    // if just console.log(searchField) right after we set state , as we type, searchFiled key is always one
    // letter behind, because setstate is an asynchronous funciton call.
    // <input type="search" placeholder="search monsters" 
    // onChange={e=>{setSearchField(e.target.value)
    //     console.log(searchField)}} /> 
    //  To solve this, 1) add a callback function to the second argument that we pass to setstate, it runs after
    // setstate is finished.( works with old setState)
    // 2) useEffect
    // useEffect(() => {
    // console.log('Do something after counter has changed', searchField);
    // }, [searchField]);
    // 3) functional update
    // const [state, setState] = useState({name: "Michael"});
    // const handleChangeName = () => {
    //   setState({name: "Jack"})
    //   setState(prevState => {
    //     console.log(prevState.name);//"Jack"

    //     //do something here

    //     // return updated state
    //     return prevState;
    //   });
    // }
    // 4)useRef
    // const [state, setState] = useState({name: "Michael"});
    // const stateRef = useRef(state);
    // stateRef.current  = state;
    // const handleClick = () => {
    //   setState({name: "Jack"});

    //   setTimeout(() => {
    //     //it refers to old state object
    //     console.log(state.name);// "Michael";

    //     //out of syntheticEvent and after batch update
    //     console.log(stateRef.current.name);//"Jack"

    //     //do something here
    //   }, 0);
    // }
    // 5)custom hook with typescript
    // import React, { useEffect, useRef, useState } from "react";

    // export const useStateWithCallback = <T>(initialState: T): [state: T, setState: (updatedState: React.SetStateAction<T>, callback?: (updatedState: T) => void) => void] => {
    // const [state, setState] = useState<T>(initialState);
    // const callbackRef = useRef<(updated: T) => void>();

    // const handleSetState = (updatedState: React.SetStateAction<T>, callback?: (updatedState: T) => void) => {
    //     callbackRef.current = callback;
    //     setState(updatedState);
    // };

    // useEffect(() => {
    //     if (typeof callbackRef.current === "function") {
    //         callbackRef.current(state);
    //         callbackRef.current = undefined;
    //     }
    // }, [state]);

    // return [state, handleSetState];
    // }