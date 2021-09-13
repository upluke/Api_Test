import React,{useState,useEffect} from 'react'
import { CardList } from './CardList'

export const MonstersRolodex:React.FC=()=>{
    const [users, setUsers]=useState([])
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(data=>setUsers(data))
    },[])
    
    console.log("users: ",users)
    
     
    return(
        <div>
            <CardList users={users} />  
            
       
           
        </div>
        
    )
} 
