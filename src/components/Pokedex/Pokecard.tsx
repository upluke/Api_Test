import React,{Component} from 'react'
// import './Pokecard.css'

const POKE_API='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'


interface PokemonInter{
    id:number;
    name:string;
    type:string;
    exp:number
}


export const Pokecard:React.FC<PokemonInter>=({id,name,type,exp})=>{
   
    let imgSrc=`${POKE_API}${id}.png`;
    return(
      <div className="Pokecard">
        <h1 className="Pokecard-title">{name}</h1>
        <img src={imgSrc} alt={name} />
        <div className="Pokecard-data">Type:{type}</div>
        <div className="Pokecard-data">EXP:{exp}</div>
      </div>
      )
  }

 
