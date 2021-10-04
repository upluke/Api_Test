import React,{Component} from 'react'
import './Pokecard.css'

// const POKE_API='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const POKE_API='https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'
 

interface PokemonInter{
    id:number;
    name:string;
    type:string;
    exp:number
}


export const Pokecard:React.FC<PokemonInter>=({id,name,type,exp})=>{
    let padToThree=(number:number)=>(number<=999?`00${number}`.slice(-3):number) 
    // let imgSrc=`${POKE_API}${id}.png`;
    let imgSrc=`${POKE_API}${padToThree(id)}.png`
    return(
      <div className="Pokecard">
        <h1 className="Pokecard-title">{name}</h1>
        <div className="Pokecard-image">
          <img src={imgSrc} alt={name} />
        </div>
        <div className="Pokecard-data">Type:{type}</div>
        <div className="Pokecard-data">EXP:{exp}</div>
      </div>
      )
  }

 
//basic        https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png.
//fanciser     https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png