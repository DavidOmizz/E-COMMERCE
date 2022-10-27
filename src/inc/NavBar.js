import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { FaCartArrowDown } from 'react-icons/fa';
import { BiCart } from 'react-icons/bi';

function NavBar() {
  const productCount = useSelector(store=>store)
  return (
        <div>
            <nav class="navbar navbar-expand-lg bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand text-white"  href="#"><span style={{fontWeight: 'bold', fontSize: '30px'}}>OMIZZ</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 mr-4 ">
        <li class="nav-item">
          <NavLink to='/' class="nav-link active text-white" aria-current="page" href="#">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to='/store' class="nav-link active text-white " aria-current="page" href="#">Store </NavLink>
        </li>
        <li class="nav-item">
          <NavLink to='/contact' class="nav-link active text-white " aria-current="page" href="#">Contact </NavLink>
        </li>
        <li class="nav-item">
          <NavLink to='/showCart' class="nav-link active text-white " aria-current="page" href="#"><BiCart size='2rem'/> </NavLink>
          <span className='badge bg-danger'>{productCount.cartitem.length}</span>
        </li>
      </ul>
    </div>
  </div>
        </nav>
        </div>
  )
}

export default NavBar