import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {ADD, RESET , MINUS} from '../slices/counterSlice'

function Counter() {
  const countObj = useSelector(store=>store.myCounter.count)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Counter: {countObj}</h1>
      <div>
        <button onClick={()=>dispatch(ADD())} className='btn btn-primary'>ADD</button>
        <button onClick={()=>dispatch(RESET())} className='btn btn-warning'>RESET</button>
        <button onClick={()=>dispatch(MINUS())} className='btn btn-danger'>MINUS</button>
      </div>
    </div>
  )
}

export default Counter