import React from 'react'

//https://randomuser.me/api
async function fetchMyApi(){
    let response= await fetch("https://randomuser.me/api")
    let json= await response.json()
    
    return JSON.stringify(json,null,2)
     
     
 }
  
export const DisplayApi=()=>{
    const [data, setData]=React.useState<any>('')


   

    React.useEffect(() => {
        (async()=>{
            let fetchData=await fetchMyApi()
            setData(fetchData)
        })()
         
        
    }, [])

    console.log("data",data)
    return (
        <div>
           {/* <div>{data.map((d:any)=>{
              return (console.log(d))
           })}</div>  */}
           <pre>
               {data}
           </pre>
            DisplayApi
        </div>
    )
}