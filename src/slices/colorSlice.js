import { createSlice } from "@reduxjs/toolkit"

const colorSlice = createSlice({
    name: 'color',
    initialState:{
        color: 'indigo'
    },
    reducers : {
        CHANGE_COLOR: (state, action)=>{
            state.color = action.payload
        }
    }
})

export const {CHANGE_COLOR} = colorSlice.actions
export default colorSlice.reducer