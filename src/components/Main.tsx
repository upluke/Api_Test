import React,{useState} from 'react'
import {Counter} from './DisplayApi/Counter'
import { DisplayApi } from './DisplayApi/DisplayApi'
import {TodoApp} from './TodoApp/TodoApp'
import { MonstersRolodex } from './MonstersRolodex/MonstersRolodex' 
import { RatingStar } from './RatingStar/RatingStar'
import {SlotMachine} from './SlotMachine/SlotMachine'
import {CartList} from './CartList/CartList'
import { Pokedex } from './Pokedex/Pokedex'

export const Main=()=>{
 
    return(
        <div>
             {/* <Counter /> */}
             {/* <DisplayApi /> */}
             {/* <TodoApp /> */}
             {/* <MonstersRolodex /> */}
             {/* <RatingStar /> */}
             {/* <SlotMachine /> */}
             {/* <CartList /> */}
             <Pokedex />
        </div>
    )
}