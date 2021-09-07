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
function fetchMyApi(pageNumber:number=1){
    return axios.get(`https://randomuser.me/api?page=${pageNumber}`)
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
    const [myData, setMyData]=React.useState("")
    const [userInfos, setUserInfos]=React.useState<any>([])
    const [nextPageNumber, setNextPageNumber]=React.useState(1)
 

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
    const fetchNextUser=React.useRef(()=>{}) // use useRef to get rid of the yellow linter when listening to fetchNextUser in useEffect
    fetchNextUser.current=()=>{
        fetchMyApi(nextPageNumber).then((data:any)=>{
            if (data===undefined) return //if run out of the page
            try{
                setMyData(JSON.stringify(data,null,2)) // this line is only for getting the data to show data on the page
                const newUserInfos=[
                    ...userInfos,
                    ...data.results
                ]
                setUserInfos(newUserInfos)
              
                setNextPageNumber(data.info.page+1)
             }catch(error){
                console.error(error)
            }
        })
    }

    React.useEffect(()=>{
        fetchNextUser.current()
    },[fetchNextUser])

 
    console.log(userInfos)
    return (
        <div>
            {userInfos.map((userInfo:any,idx:number)=>(
                <div key={idx}>
                   <p>{getFullUserName(userInfo)}</p>
                   <img src={userInfo.picture.thumbnail} alt="img"/>
               </div>
           ))} 
         
           <button onClick={()=>{fetchNextUser.current()}}>Generate a new User</button>
           <pre>
               {myData}
           </pre>
        </div>
    )
}