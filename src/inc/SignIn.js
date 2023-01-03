import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ShowCart from './ShowCart'

function SignIn() {

    const navigate = useNavigate()
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const [errorMessage, setErrorMessage] = useState(false)
    const [succesMessage, setSuccessMessage] = useState(false)

    const [showHome, setShowHome] = useState(false)

    // const local = localStorage.getItem("users")

    // useEffect(()=>{
    //     if(local){
    //         setShowHome(true)
    //         setSuccessMessage(true)
    //         setErrorMessage(false)
    //     }
    // },[])


    const submit = (e)=>{
        // To keep record of users input (Not to refresh)
        e.preventDefault()
        if(password === "" || username === ""){
            setErrorMessage(true)
            setSuccessMessage(false)
        }
        else {
            // setErrorMessage(false)
            if (JSON.parse(localStorage.getItem('users'))){
                let myUsers = JSON.parse(localStorage.getItem('users'))
                if (myUsers.username === username && myUsers.password === password){
                    setSuccessMessage(true)
                    navigate("/store")
                }
                else {
                    setErrorMessage(true)
                    setSuccessMessage(false)
                }
            }
            
        }
        
    }
  return (
    <div className='container'>
            
        <div className='row justify-content-center'>
        <h2 className='text-center mt-5 w-75'>SIGN IN</h2>
            <div className='col-10 col-md-4 shadow rounded bg-body mt-3 p-4 '>
                {
                    (errorMessage && <div class="alert alert-danger" role="alert">
                    Invalid Username or Password
                </div>)
                }
                {
                    (succesMessage && <div class="alert alert-success" role="alert">
                    Login Successfully
                </div>)
                }
                
                <form onSubmit={submit}>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">UserName:</label>
                        <input type="text" value={username} onChange={(e)=>setUserName(e.target.value)} name = 'name' class="form-control" id="exampleFormControlInput1" placeholder="example@gmail.com"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Password:</label>
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} name = 'name' class="form-control" id="exampleFormControlInput1" placeholder="example@gmail.com"/>
                    </div>
                    <button type='submit' className='btn btn-primary d-flex mx-auto'>Sign In</button>
                </form>
                {/* <p className=' mt-5 text-align-center'>Don't have an account? <a className='btn btn-primary' onClick={(e)=> navigate("/signup")}>SignUp</a></p>  */}
                <p className='text-center'>Don't have an account? <Link to="/signup" >SignUp</Link></p>
            </div>
        </div>
    </div>
  )
}

export default SignIn