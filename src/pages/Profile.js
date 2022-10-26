import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {login,logout} from '../slices/profileSlice'

function Profile() {
    const profileObj = useSelector(store=>store.myProfile.value)
    const dispatch = useDispatch()
  return (
    <div>
        <h1>My Profile</h1>
        <h3>Myname: {profileObj.name}</h3>
        <h3>Age: {profileObj.age}</h3>
        <h3>Email: {profileObj.email}</h3>
        <div>
            <button onClick={()=>dispatch(login({name:"David", age:"20", email: "david@gmail.com"}))} className='btn btn-primary'>Login</button>
            <button onClick={()=>dispatch(logout())} className='btn btn-danger'>Logout</button>
        </div>
    </div>
  )
}

export default Profile