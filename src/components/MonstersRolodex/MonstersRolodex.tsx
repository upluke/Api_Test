import React,{useState,useEffect} from 'react'

export const MonstersRolodex=()=>{
    const [users, setUsers]=useState([])
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(data=>setUsers(data))
    },[])
    
    console.log("---",users)
     
    return(
        <div>
            {users.map((user:any)=>{
                return <p>{user.name}</p>
            })}
        </div>
        
    )
} 
