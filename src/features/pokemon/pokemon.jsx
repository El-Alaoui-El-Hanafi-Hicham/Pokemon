import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SelectchoosedPikacho } from './pokemonSlice';
import { selectAbility } from '../Ability/AbilitySlice';
export default function Pokemon() {
const dispatch = useDispatch();
    const choosedPikacho= useSelector(SelectchoosedPikacho);
    
    if(Object.values(choosedPikacho).length==0){
        return (
            <div>pokemon</div>
            )
        }else{
          
            const imgs= Array.from(Object.values(choosedPikacho.sprites).filter(val=>val!=null ))
            const {name} =choosedPikacho    
            return (
                <>
                <h1>{name}</h1>
                <img src={imgs[1]} width={100} height={100}/>
                {choosedPikacho.abilities.map((ability, index) => (
        <div key={index} onMouseOver={()=>dispatch(selectAbility(ability.ability.url))}>
          <img src={ability.ability.iconUrl} alt={ability.ability.name} />
          <p>{ability.ability.name}</p>
          <br />
        <br />
        </div>
      ))}
                </>
            )
        }
}
