import React from 'react'
import axios from 'axios'
//https://randomuser.me/api

// async function fetchMyApi(){
//     let response= await fetch("https://randomuser.me/api")
//     let json= await response.json()
//     return json
//  }

function fetchMyApi(){
    return axios.get('https://randomuser.me/api')
  .then(({data})=> {
    return data
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
   
}

const getFullUserName=(userInfo:any)=>{
    const {name:{first, last}}=userInfo
    return `${first} ${last}`
}

export const DisplayApi=()=>{
    const [data, setData]=React.useState<any>("")
    const [userInfos, setUserInfos]=React.useState<any>([])

   

    // React.useEffect(() => {
    //     (async()=>{
    //         let fetchData=await fetchMyApi()
    //         setData(JSON.stringify(fetchData,null,2))
    //         setUserInfos(data)   
    //         console.log("results: ",userInfos)
    //     })()
    // }, [])
     
    React.useEffect(()=>{
        fetchMyApi().then((data:any)=>{
            setData(JSON.stringify(data,null,2))
            setUserInfos(data.results)
        })
    },[])
    console.log("data",userInfos)

    return (
        <div>
            {userInfos.map((userInfo:any,idx:any)=>(
                <div>
                   <p>{getFullUserName(userInfo)}</p>
               </div>
           ))} 
           <pre>
               {data}
           </pre>
            DisplayApi
        </div>
    )
}