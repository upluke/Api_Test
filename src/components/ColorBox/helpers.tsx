export const choice=(arr:string[])=>{
    const ranIdx=Math.floor(Math.random()*arr.length)
    return arr[ranIdx]
}