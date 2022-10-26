import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  
  return (
    <div className='me'>
      <div className='row justify-content-center mt-5'>
      <div>
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink>Contact</NavLink></li>
            <li><NavLink to='/store'>Me</NavLink></li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Footer