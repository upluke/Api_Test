import React from 'react'
import axios from 'axios'
//https://randomuser.me/api

type Username={
    first:string;
    last:string
}

type UserPicture={
    thumbnail:string;
}

interface UserInfoInterface{
    name:Username
    picture:UserPicture
}

// @@@@@@ async await
// async function fetchMyApi(){
//     let response= await fetch("https://randomuser.me/api")
//     let json= await response.json()
//     return json
//  }

// @@@@@@ axios then
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

const getFullUserName=(userInfo:UserInfoInterface)=>{
    const {name:{first, last}}=userInfo
    return `${first} ${last}`
}

export const DisplayApi=()=>{
    const [myData, setMyData]=React.useState<any>("")
    const [userInfos, setUserInfos]=React.useState<any>([])

    // @@@@@@ async await
    // React.useEffect(() => {
    //     (async()=>{
    //         try{
    //             const fetchData=await fetchMyApi()
    //             setMyData(JSON.stringify(fetchData,null,2))
    //             setUserInfos(fetchData.results)
    //         }catch(error){
    //             console.error(error)
    //         }
           
    //     })()
    // }, [])

    // @@@@@@ axios then
    React.useEffect(()=>{
        
            fetchMyApi().then((data:any)=>{
                try{
                    setMyData(JSON.stringify(data,null,2)) // this line is only for getting the data to show data on the page
                    setUserInfos(data.results)
                 }catch(error){
                    console.error(error)
                }
            })
       
     
    },[])

 

    return (
        <div>
            {userInfos.map((userInfo:UserInfoInterface,idx:number)=>(
                <div key={idx}>
                   <p>{getFullUserName(userInfo)}</p>
                   <img src={userInfo.picture.thumbnail} alt="img"/>
               </div>
           ))} 
           <pre>
               {myData}
           </pre>
            DisplayApi
        </div>
    )
}