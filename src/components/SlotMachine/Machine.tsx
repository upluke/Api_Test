import React from 'react'

interface MachineProp{
  s1:string;
  s2:string;
  s3:string
}

export const Machine:React.FC<MachineProp>=({s1,s2,s3})=>{
  const winner=(s1===s2)&& (s2===s3) 
  return(
    <div>
      <h1>{s1}--{s2}--{s3}</h1>
      {winner?'Winner':'Loser'}
    </div>
  )
}