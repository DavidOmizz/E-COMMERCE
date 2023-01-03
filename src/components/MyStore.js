import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import data from '../inc/ProductData'
import SingleProduct from './SingleProduct'
// import { fa-magnifying-glass} from 'react-icons/fa';
// import { FaSearch } from "react-icons/fa";
import slider_bg from '../images/hero_1.jpg'
import slider_bg1 from '../images/slider-bg.jpg'
import slider_bg2 from '../images/slider-bg1.jpg'

import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaMobile, FaAndroid} from 'react-icons/fa';


function MyStore() {

  let date = new Date().getFullYear()
    const productObj = useSelector(store => store)
    // console.log(productObj);

    const [searchKey, setSearchKey] = useState('')

    const [itemList, setItemList] = useState(productObj.items)

    const productCount = useSelector(store => store)

    const filterItems = (e)=>{
        const holdFilter = productObj.items

        const getFilter = holdFilter.filter(item=>item.gender.toLowerCase().includes(searchKey.toLowerCase()))
        setItemList(getFilter)
        // if (getFilter){
        //     return setItemList(getFilter)
        // }
        // else {
        //     return setItemList("No item found")
        // }
    }
    // console.log(itemList);

    // const [product, setProduct] = useState(data)
    // const product = useSelector(store=>store)
    // console.log(product)

    const filterCategory = (item)=>{
        const holdCat = productObj.items
        const result = holdCat.filter((curData)=>{
            return curData.gender===item;
        })
        setItemList(result);
    

    }

  return (
    <div>
        
      <div className='slideshow-holder'>
        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className='dot' class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" className='dot' aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" className='dot' aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              <img src={slider_bg} class="d-block w-100 img-fluid" alt="..."/>
              <div className='carousel-caption d-none d-md-block'>
                <h1>Welcome to my world</h1>
              </div>
              
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src={slider_bg1} class="d-block w-100 img-fluid" alt="..."/>
              <div className='carousel-caption d-none d-md-block'>
                <h1>We give you the best</h1>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="3000">
              <img src={slider_bg2} class="d-block w-100 img-fluid" alt="..."/>
              <div className='carousel-caption d-none d-md-block'>
                <h1>Ask for help</h1>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
       
      </div>

      <div className='container'>
        <div className='row justify-content-center'>
        {/* <p>The number of items in your cart are: {productCount.cartitem.length} </p> */}
            <form onKeyUp={filterItems}>
                <div class="mb-3 col-md-6 col-6 d-flex mx-auto mt-3">
                    <input type="text" value={searchKey} onChange={(e)=>setSearchKey(e.target.value)} name = 'name' class="form-control" id="exampleFormControlInput1" placeholder="Search"/>
                    {/* <button className='btn btn-danger' type='submit'><i><FaSearch/></i></button> */}
                </div>
                    {/* <button className='btn btn-dark m-2' onClick={()=>filterCategory()}>ALL</button> */}
                   
            </form>
            <div className='col-md-3 text-center'>
                <button className='btn btn-outline-warning m-2' onClick={()=>setItemList(productObj.items)}>All</button>
                <button className='btn btn-outline-warning m-2' onClick={()=>filterCategory('Women')}>Women</button>
                <button className='btn btn-outline-warning m-2' onClick={()=>filterCategory('Men')}>Men</button>
            </div>
            <div className='row'>
            {
                itemList.map((item)=>{
                    return(
                        <div className='col-md-4' key={item.id}>
                            <SingleProduct item = {item}/>
                        </div>
                    )
                })
            }
            </div>
            <div className='text-center mt-5 text-danger'>
                {itemList.length === 0 && <span>No record found!</span> }
            </div>
        </div>
      </div>

      {/* fOOTER ------------------------------------------------------------------------------>>>>> */}

      <footer className='container-fluid mt-5'>
          <div className='row justify-content-center footer-flex'>
            <div className='col-md-2'>
              <h4>About</h4>
              <p>AVIRA Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laborum commodi similique totam</p>
                <FaFacebook size='1.2rem' className='icons'/>
                <FaTwitter size='1.2rem' className='icons'/>
                <FaInstagram size='1.2rem' className='icons'/>
            </div>
            <div className='col-md-2'>
              <h4>Category</h4>
              <p><a href=''>Men</a></p>
              <p><a href=''>Women</a></p>
            </div>
            
            <div className='col-md-4'>
              <h4>Contact</h4>
                <div className='footer-contact d-flex'>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laborum commodi similique totam</p>
                </div>
                <p className=''><a href='mailto:davidomisakin4good@gmail.com?subject=Hello, David'><FaEnvelope size='1rem' className='contact-icons'/>davidomisakin4good@gmail.com</a></p>
                <p><FaMobile size='1rem' className='contact-icons'/>+234 803 2482 069</p>

            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 text-center mt-2 copyright'>
              <p>copyright ©{date} All rights reserved by DavidOmizz</p>
            </div>
          </div>
      </footer>
    </div>
    
    
  )
}

export default MyStore

