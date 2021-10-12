import React  from "react";
import "./Coin.css";

export const Coin:React.FC<any> =({imgSrc, side})=>{
    console.log(imgSrc,"---", side)
    return (
      <div className='Coin'>
        <img src={imgSrc} alt={side} />
      </div>
    );
 
}

 