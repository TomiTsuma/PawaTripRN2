import { createSlice } from "@reduxjs/toolkit"
import { createStore } from "redux";
import { Location, Permission } from "expo";
import { auth } from "../firebase";

const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation : null,
    user: null
}


export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setOrigin:(state,action) => {
            state.origin = action.payload
        },
        setDestination:(state,action) => {
            state.origin = action.payload
        },
        setTravelTimeInformation:(state,action) => {
            state.origin = action.payload
        },
        setUser:(state) =>{
            state.user = auth.currentUser;
        }
    }

})

export const {setOrigin, setDestination, setTravelTimeInformation,setUser} =navSlice.actions;


export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;
export const selectUser = (state) => state.nav.user;
export default navSlice.reducer;