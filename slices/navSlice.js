import { createSlice } from "@reduxjs/toolkit"
import { createStore } from "redux";
import { Location, Permission } from "expo";

const initialState = {
    origin: { 
        coordinates:{
            latitude:"",
            longitude:""
        }
    },
    destination: {
        coordinates:{
            latitude:"",
            longitude:"",
        }
    },
    travelTimeInformation : null,
}


export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setOrigin:(state,action) => {
            state.origin = action.payload
        },
        setDestination:(state,action) => {
            state.destination = action.payload
        },
        setTravelTimeInformation:(state,action) => {
            state.origin = action.payload
        },
        
    }

})

export const {setOrigin, setDestination, setTravelTimeInformation} =navSlice.actions;


export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;
export default navSlice.reducer;