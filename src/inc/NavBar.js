import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { FaTimes } from 'react-icons/fa';
import { BiCart, BiMenu } from 'react-icons/bi';

function NavBar() {
  const productCount = useSelector(store=>store)
  const[nameClass, setnameClass]=useState(true)

  const myFunction = (x)=> {
    setnameClass(!nameClass)
    
  }
  return (
        <div>
          <nav className="navbar navbar-expand-lg p-1">
          <div className="container-fluid">
            <a className="navbar-brand text-dark"  href="#"><span style={{fontWeight: 'bold', fontSize: '30px'}}>AVIRA</span></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mr-4 ">
                <li className="nav-item">
                  <NavLink to='/home' className="nav-link active text-dark" aria-current="page" href="#">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to='/store' className="nav-link active text-dark " aria-current="page" href="#">Store </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to='/contact' className="nav-link active text-dark " aria-current="page" href="#">Contact </NavLink>
                </li>
              </ul>
              <ul className='navbar-nav ms-auto mb-2 mb-lg-0 mr-4 '>
                <li className="nav-item" style={{display:'flex', alignItems: 'center'}}>
                  <NavLink to='/showCart' className="nav-link active text-dark " aria-current="page" href="#"><BiCart size='1.5rem'/> </NavLink>
                  <span className='badge bg-danger'>{productCount.cartitem.length}</span>
                </li>
              </ul>
            </div>
          </div>
        </nav>


          {/* <nav>
            <div className='menu-icon'>
                <span className='fas fa-bars'>Menu</span>
            </div>
            <div className='logo'>Omizz</div>
            <div className='nav-items'>
              <li>
                <NavLink to='/home' className="nav-link active text-white" aria-current="page" href="#">Home</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink to='/store' className="nav-link active text-white " aria-current="page" href="#">Store </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/contact' className="nav-link active text-white " aria-current="page" href="#">Contact </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/contact' className="nav-link active text-white " aria-current="page" href="#">Logout</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/showCart' className="nav-link active text-white " aria-current="page" href="#"><BiCart size='2rem'/> </NavLink>
                <span className='badge bg-danger'>{productCount.cartitem.length}</span>
              </li>
            </div>
            <div className='menu-icon'>
                <span><BiMenu size='2rem' color='white'/></span>
            </div>
            <div className='cancel-icon'>
              <span><FaTimes size='2rem' color='white'/></span>
            </div>
          </nav> */}



          {/* <nav>
  
            <div className='menu-icon'>
                <span className='fas fa-bars'>Menu</span>
            </div>
            <div className='logo'>v<span style={{color:'red'}}>STORE</span></div>
            <div className='nav-items'>
              <li>
                <NavLink to='/home' className="nav-link active text-white" aria-current="page" href="#">Home</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink to='/store' className="nav-link active text-white " aria-current="page" href="#">Store </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/contact' className="nav-link active text-white " aria-current="page" href="#">Contact </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/contact' className="nav-link active text-white " aria-current="page" href="#">Logout</NavLink>
              </li>
              <li className="nav-item" style={{display:'flex', alignItems: 'center'}}>
                <NavLink to='/showCart' className="nav-link active text-white " aria-current="page" href="#"><BiCart size='2rem'/> </NavLink>
                <span className='badge bg-danger'>{productCount.cartitem.length}</span>
              </li>
            </div>

            
          </nav> */}
        </div>
  )
}

export default NavBar