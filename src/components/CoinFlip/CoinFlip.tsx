import React from "react";
import {Coin} from "./Coin";
import { choice } from "./helpers";


const defaultProps = {
  coins: [
    { side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
    { side: "tails", imgSrc: "https://tinyurl.com/react-coin-tails-jpg" }
  ]
};

export const CoinFlip =()=> {

  const [currCoin, setCurrCoin] = React.useState<any>(null)
  const [nFlips, setNFlips]=React.useState(0)
  const [nHeads, setNHeads]=React.useState(0)
  const [nTails, setNTails]=React.useState(0)

   
 
  const flipCoin=()=> {
    const newCoin = choice(defaultProps.coins);
    // this.setState(st => {
    //   return {
    //     currCoin: newCoin,
    //     nFlips: st.nFlips + 1,
    //     nHeads: st.nHeads + (newCoin.side === "heads" ? 1 : 0),
    //     nTails: st.nTails + (newCoin.side === "tails" ? 1 : 0)
    //   };
    // });
    
    setCurrCoin(newCoin)
    setNFlips(currentFlip=>currentFlip+1)
    setNHeads(currentHead=>currentHead+(newCoin.side==="heads"?1:0))
    setNTails(currentTail=>currentTail+(newCoin.side==="tails"?1:0))

  }
  const handleClick=()=> {
    flipCoin();
  }
  
  console.log(currCoin)

  return (
      <div className='CoinContainer'>
        <h2>Let's Flip A Coin!</h2>
         <Coin imgSrc={currCoin?.imgSrc} side={currCoin?.side}/>
        <button onClick={ handleClick}>Flip Me!</button>
        <p>
          Out of { nFlips} flips, there have been { nHeads}{" "}
          heads and { nTails} tails.
        </p>
      </div>
    );
  }
 
 