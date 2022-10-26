import {configureStore} from '@reduxjs/toolkit'
import colorSlice from '../slices/colorSlice'
import counterSlice from '../slices/counterSlice'
import profileSlice from '../slices/profileSlice'

const store = configureStore({
    reducer : {
        myCounter: counterSlice,
        myProfile: profileSlice,
        myColor: colorSlice
    }
})

export default store