import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SelectPokemons, fetchPokemon } from './pokemonSlice'
import { fetchPokemons } from './pokemonSlice'
import Pokemon from './pokemon'
import { GetAllAbilityies } from '../Ability/AbilitySlice'
export default function ShowPokemons() {
    const dispatch=useDispatch()
    const pokemons = useSelector(SelectPokemons);
    const {next,prev} = useSelector((state)=>state.pokemon);
    console.log(prev)
 useEffect(() => {
   dispatch(fetchPokemons())
   dispatch(GetAllAbilityies())
   
 }, [])
 const SelectPokemon = (url) =>{
 dispatch(fetchPokemon(url))
 }
 const ChangePage = (e) =>{
  const URL = e.target.getAttribute("data-url")
  dispatch(fetchPokemons(URL))
 }
  return (
    <div className='d-flex'>
        <div>   
   
        {Object.values(pokemons).map((pokemon,index)=>
        
       <h1 key={index} onMouseOver={()=>SelectPokemon(pokemon.url)}>{pokemon.name}</h1>
        
        )}
  
        </div>
        <Pokemon />
        <div>
        <button disabled={prev==null?true:false} onClick={ChangePage} data-url={prev}>Previous</button>
        <button disabled={next==null?true:false} onClick={ChangePage} data-url={next}>Next</button>
        </div>
    </div>
  )
}
