import { createSlice,createEntityAdapter, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../API/apiSlice";
import axios from "axios";
import { useSelector } from "react-redux";
let id = 0
const adapter = createEntityAdapter({
    selectId:pokemon=>{id=id+1;return id},
sortComparer:(a,b)=>a.id - b.id
})
const initialState= adapter.getInitialState({
    status: 'idle',
    choosedPikacho:{},
    prev:null,
    next:null,
  })
export const fetchPokemons = createAsyncThunk('pokemons/getAll', async (url) => {
  let   response;
  if(!url){
    response   =      await Axios.get('pokemon');
  }else{
   response =      await axios.get(url);

  }
    return response.data;
  });
export const fetchPokemon = createAsyncThunk("pokemons/getPokemon", async (url)=>{
    const response = await axios.get(url);
    return response.data
})
  
export const pokemonSlice  = createSlice({
    name:'pokemon',
    initialState:initialState,
    reducers:{
ShowSelectedPokemon:(state,action)=>{
    
}
    },
    extraReducers:builder=>{
builder.addCase(fetchPokemons.pending,(state,action)=>{
    state.status= "loading" 
})
.addCase(fetchPokemons.fulfilled, (state, action) => {
    adapter.setAll(state, action.payload.results)
    state.status = 'idle'
    state.next=action.payload.next;
    state.prev= action.payload.previous;
  })
  
  .addCase(fetchPokemons.rejected,(state,action) =>{
    console.log("fucked UP")
  })
  .addCase(fetchPokemon.pending,(state,action) =>{
state.status= "loading"
  })
  .addCase(fetchPokemon.fulfilled,(state,action) =>{
    state.status= "idle"
     state.choosedPikacho= action.payload;
      })
    .addCase(fetchPokemon.rejected,(state,action)=>{
        console.log("faiiiiiiiiiiiled")
    })

    }
})

export const {ShowAllPokemons} = pokemonSlice.actions
export const {selectEntities:SelectPokemons,selectAll:selectAllPokemons,selectById:SelectPokemonByID,selectTotal:SetTotal,selectIds:selectPokemonsIDs} = adapter.getSelectors( (state) => state.pokemon)
export const SelectchoosedPikacho= (state) => state?.pokemon?.choosedPikacho;
// export const {prev,next} = getState();
