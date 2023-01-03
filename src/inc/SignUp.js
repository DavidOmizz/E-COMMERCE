import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SignUp() {

    const navigate = useNavigate()

    const submit = (e)=>{
        e.preventDefault()
        // alert('okay')
        if(username === '' || name === '' || email === '' || password === ''){
            setErrorMessage(true)
            setSuccessMessage(false)
        }
        else{
            setSuccessMessage(true)
            setErrorMessage(false)
            let user = {
                name: name,
                email: email,
                password: password,
                username: username
            }
            localStorage.setItem('users', JSON.stringify(user))
            // window.location = <Link to='/signin'/>
            navigate('/signin')

        }

    }

    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState(false)
    const [succesMessage, setSuccessMessage] = useState(false)
 
  return (
    <div className='container'>
        <div className='row justify-content-center'>
        <h2 className='text-center mt-3 w-75'>REGISTRATION FORM</h2>
            <div className='col-md-6 col-8 shadow bg-body rounded mt-3 p-4'>
                {
                    (errorMessage && <div class="alert alert-danger" role="alert">
                        Fields cannot be empty
                    </div>)
                }
                {
                    (succesMessage && <div class="alert alert-success" role="alert">
                    Successfully registered
                    </div>)
                }
                <form onSubmit={submit}>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Name:</label>
                        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} name = 'name' class="form-control" id="exampleFormControlInput1" placeholder="Enter fullname"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">UserName:</label>
                        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} name = 'name' class="form-control" id="exampleFormControlInput1" placeholder="Enter UserName"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email:</label>
                        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} name = 'name' class="form-control" id="exampleFormControlInput1" placeholder="example@gmail.com"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Password:</label>
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} name = 'name' class="form-control" id="exampleFormControlInput1" placeholder="example@gmail.com"/>
                    </div>
                    <button type='submit' className='btn btn-primary d-flex mx-auto'>Sing Up</button>
                </form>
                <p className='text-center'>Already have an account? <Link to="/" >Sign In</Link></p>
            </div>
        </div>
    </div>
  )
}

export default SignUp