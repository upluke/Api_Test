import React,{useState} from 'react'
import {Counter} from './DisplayApi/Counter'
import { DisplayApi } from './DisplayApi/DisplayApi'
import {TodoApp} from './TodoApp/TodoApp'
import { MonstersRolodex } from './MonstersRolodex/MonstersRolodex' 
import { RatingStar } from './RatingStar/RatingStar'
import {SlotMachine} from './SlotMachine/SlotMachine'
import {CartList} from './CartList/CartList'
import { PokeApp } from './Pokedex/PokeApp'
import {RollDice} from './RollDice/RollDice'
import {LotteryApp} from './LotteryApp/LotteryApp'
import { CoinFlip } from './CoinFlip/CoinFlip'
import { ColorBox } from './ColorBox/ColorBox'

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
             {/* <PokeApp /> */}
             {/* <RollDice /> */}
             {/* <LotteryApp /> */}
             {/* <CoinFlip /> */}
             <ColorBox />
        </div>
    )
}