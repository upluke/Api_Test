import React from 'react'

interface data{
    id:number,
    name:string
}

/* eslint-disable */
const serverData = [{id: 5, name: 'Siri'}, {id: 8, name: 'Alexa'}]
const localData1:[] = []
const localData2 = [{id: 5, name: 'Siri'}]
const localData3 = [{id: 12, name: 'Cortana'}]



const sync= (localData:data[], serverData:data[]) => {
  // Implement sync here
  
  const serverIds:[]=[]
  serverData.map((sd:data)=>{
      [...serverIds,sd.id]
  })
  
  localData.map((ld:data)=>{
    if (!serverIds.includes){
        return [...serverData, ld]
    }
  })
  return serverData
   
}
console.log(sync(localData1, serverData))
console.log(sync(localData2, serverData))
console.log(sync(localData3, serverData))