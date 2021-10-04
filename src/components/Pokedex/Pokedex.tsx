import React, {Component} from 'react'
import {Pokecard} from './Pokecard'
import './Pokedex.css'
 

type Pokemon={
    id:number;
    name:string;
    type:string;
    base_experience:number
}

interface PokedexProp{
  pokemon:Pokemon[];
  exp:number;
  isWinner:boolean
}

export const Pokedex:React.FC<PokedexProp>=({pokemon, exp,isWinner})=>{
    let title;
    if( isWinner){
      title=<h1 className="Pokedex-winner">Winning Hand</h1>
    }else{
      title=<h1 className="Pokedex-loser">Losing Hand</h1>
    }
    
    return(
     <div className="Pokedex">
       {title}
       <p>Total Experience: {exp}</p>
      
      <div className="Pokedex-cards">
        {pokemon.map((p)=>(
          <Pokecard key={p.id} id={p.id} name={p.name} type={p.type}
            exp={p.base_experience}
          ></Pokecard>
        ))}
      </div>
     </div>
    )
 
}
 