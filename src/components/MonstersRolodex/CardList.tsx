import React from 'react'
import { Card } from './Card'
import './CardList.css'

export const CardList:React.FC<any>=({users})=> {
 
    return (
        <div className="card-list">
          {users?.map((user:any)=>{
                    return <Card key={user.name} name={user.name} id={user.id} email={user.email} />
                 })}
        </div>
    )
}
