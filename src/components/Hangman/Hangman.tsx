import React from "react";
import "./Hangman.css";
import {randomWord} from './words'


import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";


const defaultProps = {
  maxWrong: 6,
  images: [img0, img1, img2, img3, img4, img5, img6]
};


export const Hangman =()=> {
  /** by default, allow 6 guesses and use provided gallows images. */
 
 
  const [nWrong, setNWrong]=React.useState(0)
  const [guessed, setGuessed]=React.useState<any>(new Set())
  const [answer, setAnswer]=React.useState(randomWord())

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  const guessedWord=()=> {
    return answer
      .split("")
      .map((ltr) => (guessed.has(ltr) ? ltr : "_"));
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */

   
  const handleGuess=(evt:any)=> {
    let ltr = evt.target.value;
    // this.setState((st) => ({
    //   guessed: st.guessed.add(ltr),
    //   nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
    // }));

    setGuessed((st:any)=>st.add(ltr))
    let value=answer.includes(ltr)?0:1
    setNWrong((st:any)=>st +value)

  }  
  
  /** generateButtons: return array of letter buttons to render */
  const generateButtons=()=> {
    return "abcdefghijklmnopqrstuvwxyz".split("").map((ltr) => (
      <button
        key={ltr}
        value={ltr}
        onClick={handleGuess}
        disabled={guessed.has(ltr)}
      >
        {ltr}
      </button>
    ));
  }

  const reset=()=>{
    setNWrong(0)
    setGuessed(new Set())
    setAnswer(randomWord())
  }
 
  /** render: render game */
  const gameOver =  nWrong >=  defaultProps.maxWrong;
  const isWinner = guessedWord().join("") === answer;
  const altText = `${nWrong}/${defaultProps.maxWrong} guesses`;
//   let gameState =  generateButtons();
//   if (isWinner) gameState = "You Win!";
//   if (gameOver) gameState = "You Lose!";
    console.log("gusessed: ",guessed)
    return (
      <div className="Hangman">

        <div className='Hangman'>
        <h1>Hangman</h1>
        <img src={defaultProps.images[nWrong]} alt={altText} />
        <p>Guessed Wrong: {nWrong}</p>
        <p className='Hangman-word'>
          {!gameOver ? guessedWord() : answer}
        </p>
        <p>{isWinner&&"You Win!"}</p>
        {gameOver?"You lose!":<p className='Hangman-btns'>{generateButtons()}</p>}
        
        <button id='reset' onClick={reset}>
          Restart?
        </button>
      </div>
       
      </div>
    );
  }
 

 