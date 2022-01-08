import { createSlice} from "@reduxjs/toolkit";


const initialState={
    currentUsr:"em",
    usrPhone:"",
    usrId:"",
    usrMode:"",
    usrEmail:""
}

export const userSlice = createSlice({
    name:'usr',
    initialState,
    reducers:{
        setCurrentUser:(state,action)=>{
            state.currentUsr = action.payload
        },
        setUserId:(state,action) =>{
            state.origin = action.payload
        },
        setUserPhone:(state,action) => {
            state.origin = action.payload
        },
        setUserMode:(state,action) => {
            state.origin = action.payload
        },
        setUserEmail:(state,action) => {
            state.origin = action.payload
        }
    }
})

export const {setCurrentUser, setUserId, setUserPhone, setUserMode, setUserEmail} = userSlice.actions;
export default userSlice.reducer;