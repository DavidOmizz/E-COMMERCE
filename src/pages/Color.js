import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {CHANGE_COLOR} from "../slices/colorSlice"

function Color() {
    const[colorman, setColorman] = useState('')

    const colorObj = useSelector(store=>store.myColor.color)
    const dispatch = useDispatch()
  return (
    <div>
        <h1>Change Color {colorObj}</h1>
        <input value={colorman} type= 'text' onChange={(e)=>setColorman(e.target.value)} placeholder='Enter your name' />
        <button className='btn btn-primary' onClick={()=>dispatch(CHANGE_COLOR(colorman))}>Change color</button>
    </div>
  )
}

export default Color