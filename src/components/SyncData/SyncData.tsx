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


// init:
// const sync= (localData:data[], serverData:data[]) => {
//   // Implement sync here
//   let serverIds:number[]=[]
//   serverData.map((sd:data)=>{
//     //   serverIds.push(sd.id)
//       serverIds=[...serverIds, sd.id]
//   })
  
//   localData.map((ld:data)=>{
//     if (!serverIds.includes(ld.id)){
//         serverData.push(ld)
//     }
//   })
//   return serverData
// }

const sync = (localData:data[], serverData:data[]) => {
  let result = [...serverData];
  let serverDataMapping:{[num:number]:string}= {};

  serverData.forEach((el:data) => {
    serverDataMapping[el.id] = el.name;
  });

  localData.forEach((el) => {
    if (!serverDataMapping[el.id]) {
      result = [...result, el];
    }
  });
  return result;
};
console.log(sync(localData1, serverData))
console.log(sync(localData2, serverData))
console.log(sync(localData3, serverData))

// result:
// [ 5, 8 ]
// [ { id: 5, name: 'Siri' }, { id: 8, name: 'Alexa' } ]
// [ 5, 8 ]
// [ { id: 5, name: 'Siri' }, { id: 8, name: 'Alexa' } ]
// [ 5, 8 ]
// [ { id: 5, name: 'Siri' },
//   { id: 8, name: 'Alexa' },
//   { id: 12, name: 'Cortana' } ]