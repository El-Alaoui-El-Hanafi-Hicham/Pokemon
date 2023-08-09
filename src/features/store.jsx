import { configureStore } from "@reduxjs/toolkit";
import {  pokemonSlice } from "./pokemon/pokemonSlice";
import { AbilitySlice } from "./Ability/AbilitySlice";
import { ColorSlice } from "./Color/ColorSlice";

export const store =configureStore({
    reducer:{

        "pokemon":pokemonSlice.reducer,
        "ability":AbilitySlice.reducer,
        "color":ColorSlice.reducer,
    }
})