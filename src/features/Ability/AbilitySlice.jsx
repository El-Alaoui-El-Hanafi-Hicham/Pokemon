import { createAsyncThunk, createEntityAdapter,createSlice } from "@reduxjs/toolkit";
import Axios from "../API/apiSlice";
import axios from "axios";
let id = 0;
const adapter = createEntityAdapter({
    selectId:()=>{id++; return id},
    sortComparer:(a,b)=>a-b 
})
export const GetAllAbilityies= createAsyncThunk("Ability/getAll",async ()=>{
const response = await Axios.get("ability");
return response.data
})
export const selectAbility = createAsyncThunk("ability/get",async (url)=>{
    const response  = await axios.get(url);
    return response.data
})
export const AbilitySlice= createSlice({
    name:"ability",
    initialState:adapter.getInitialState({
status:'idle',
selectedAbility:{}
    }),
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(GetAllAbilityies.pending,(state,action)=>{
            state.status="loading"
        })
        .addCase(GetAllAbilityies.fulfilled,(state,action)=>{
            state.status="idle"
           adapter.setAll(state,action.payload.results);
        })
        .addCase(GetAllAbilityies.rejected,(state,action)=>{
            state.status="rejected"
            console.log(action.error);
        })
        builder.addCase(selectAbility.pending,(state,action)=>{
            state.status="loading"
        })
        .addCase(selectAbility.fulfilled,(state,action)=>{
            state.status="idle"
            
            state.selectedAbility = action.payload
        })
        .addCase(selectAbility.rejected,(state,action)=>{
            state.status="rejected"
            console.log(action.error);
        })
    }
})