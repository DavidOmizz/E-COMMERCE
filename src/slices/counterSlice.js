import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name: "counter",
    initialState:{
        count: 0
    },
    reducers:{
        //Action
        ADD: (state)=>{
            state.count += 1
        },
        RESET: (state)=>{
            state.count = 0
        },
        MINUS: (state)=>{
            state.count -= 1
        }
    }
})

export const {ADD, RESET , MINUS} = counterSlice.actions
export default counterSlice.reducer