import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import Axios from "../API/apiSlice";
let id = 0
const adapter =createEntityAdapter({
selectId:()=>{return ++id},
sortComparer:(a,b)=>b.id>a.id
})
export const getAllColors = createAsyncThunk("Colors/getAll",async()=>{
const response = await Axios.get("pokemon-color");
return response.data
})
export const selectColor = createAsyncThunk("Colors/getSelected",async (name)=>{
const response = await Axios.get(`pokemon-color/${name}`);
return response.data
})
export const ColorSlice = createSlice({
    name:"color",
    initialState:adapter.getInitialState({
        status:'idle',
        selectedColor:{
            status:'idle'
        }
    }),
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(getAllColors.pending,(state,action)=>{
state.status= "loading"
        })
        .addCase(getAllColors.fulfilled,(state,action)=>{
            state.status = "idle"
            adapter.setAll(state,action.payload.results)
        })
        .addCase(getAllColors.rejected,(state,action)=>{
            state.status = "rejected"
       console.error("error : " +action.payload.error)
        })
        .addCase(selectColor.pending,(state,action)=>{
            state.selectedColor.status= "loading"
                    })
        .addCase(selectColor.fulfilled,(state,action)=>{
                        state.selectedColor.status = "idle"
                        console.log(action.payload)
                        Object.assign(state.selectedColor,action.payload)
                    })
        .addCase(selectColor.rejected,(state,action)=>{
                        state.selectedColor.status = "rejected"
                   console.error("error : " +`error`)
                    })
    }
})
