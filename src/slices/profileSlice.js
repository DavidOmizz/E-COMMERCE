import { createSlice } from "@reduxjs/toolkit"

const profileSlice = createSlice({
    name: "profile",
    initialState: {
        value: {
            name: "",
            age: 0,
            email: "",
        }
    },
    reducers:{
        //Actions
        login: (state, action)=>{
            state.value = action.payload
        },
        logout: (state)=>{
            state.value = {name: '', age: '', email:''}
        }
    }
})

export const {login, logout} = profileSlice.actions
export default profileSlice.reducer