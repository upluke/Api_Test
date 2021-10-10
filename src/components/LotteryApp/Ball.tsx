import React from "react";
import "./Ball.css";

interface BallProp{
  num:number 
}

export const Ball:React.FC<BallProp> = ({ num }) => {
  return <div className="Ball">{num}</div>;
};
